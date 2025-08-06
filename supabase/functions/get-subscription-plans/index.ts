
// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  
  try {
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Initialize Supabase client with service role key to bypass RLS
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") || "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "",
      { auth: { persistSession: false } }
    );

    console.log("Fetching prices from Stripe...");

    // Fetch all active prices from Stripe
    const prices = await stripe.prices.list({
      active: true,
      expand: ['data.product'],
    });

    console.log(`Found ${prices.data.length} active prices from Stripe`);

    // Transform Stripe prices to match the expected format
    const plans = prices.data.map(price => {
      const product = price.product as Stripe.Product;
      
      // Extract metadata for category and other fields
      const category = product.metadata?.category || 'GENERAL';
      const duration_days = parseInt(product.metadata?.duration_days || '31');
      const benefits = product.metadata?.benefits;
      const description = product.description || '';
      
      return {
        id: price.id,
        stripe_plan_id: price.id,
        name: product.name,
        description: description,
        price_eur: price.unit_amount ? price.unit_amount / 100 : 0, // Convert from cents to euros
        category: category,
        duration_days: duration_days,
        benefits: benefits ? JSON.parse(benefits) : [],
        is_active: price.active,
        stripe_product_id: product.id,
        metadata: product.metadata,
        recurring: price.recurring ? {
          interval: price.recurring.interval,
          interval_count: price.recurring.interval_count
        } : null
      };
    });

    console.log("Synchronizing with SubscriptionPlan table...");

    // Synchronize with SubscriptionPlan table
    for (const plan of plans) {
      try {
        // Check if plan already exists
        const { data: existingPlan, error: fetchError } = await supabase
          .from('SubscriptionPlan')
          .select('id, updated_at')
          .eq('stripe_plan_id', plan.stripe_plan_id)
          .single();

        if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 is "not found"
          console.error(`Error fetching plan ${plan.stripe_plan_id}:`, fetchError);
          continue;
        }

        const planData = {
          name: plan.name,
          stripe_plan_id: plan.stripe_plan_id,
          price_eur: plan.price_eur,
          duration_days: plan.duration_days,
          benefits: plan.benefits,
          category: plan.category,
          is_active: plan.is_active,
          updated_at: new Date().toISOString()
        };

        if (existingPlan) {
          // Update existing plan
          const { error: updateError } = await supabase
            .from('SubscriptionPlan')
            .update(planData)
            .eq('id', existingPlan.id);

          if (updateError) {
            console.error(`Error updating plan ${plan.stripe_plan_id}:`, updateError);
          } else {
            console.log(`Updated plan: ${plan.name}`);
          }
        } else {
          // Insert new plan
          const { error: insertError } = await supabase
            .from('SubscriptionPlan')
            .insert({
              ...planData,
              created_at: new Date().toISOString()
            });

          if (insertError) {
            console.error(`Error inserting plan ${plan.stripe_plan_id}:`, insertError);
          } else {
            console.log(`Inserted new plan: ${plan.name}`);
          }
        }
      } catch (planError) {
        console.error(`Error processing plan ${plan.stripe_plan_id}:`, planError);
      }
    }

    // Optionally, deactivate plans that are no longer active in Stripe
    const activeStripePlanIds = plans.map(p => p.stripe_plan_id);
    const { error: deactivateError } = await supabase
      .from('SubscriptionPlan')
      .update({ is_active: false, updated_at: new Date().toISOString() })
      .not('stripe_plan_id', 'in', `(${activeStripePlanIds.map(id => `"${id}"`).join(',')})`);

    if (deactivateError) {
      console.error('Error deactivating obsolete plans:', deactivateError);
    }

    console.log("Synchronization completed successfully");

    // Return the plans for the frontend
    return new Response(
      JSON.stringify({ plans: plans }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    console.error("Error in get-subscription-plans:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error." }),
      { status: 500, headers: corsHeaders }
    );
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request GET 'http://127.0.0.1:54321/functions/v1/get-subscription-plans' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json'

*/
