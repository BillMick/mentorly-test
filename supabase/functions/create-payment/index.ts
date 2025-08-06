import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": 'GET, POST, PUT, DELETE, OPTIONS',
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Credentials": 'true',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body
    const body = await req.json();
    console.log("BODY: ", body);
    
    const { plan_id, user_id, email } = body;
    if (!plan_id) throw new Error("Plan ID is required");
    if (!user_id) throw new Error("User ID is required");
    if (!email) throw new Error("User Email is required");

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Get plan details from Stripe
    const price = await stripe.prices.retrieve(plan_id, {
      expand: ['product']
    });

    if (!price || !price.product) {
      throw new Error("Plan not found in Stripe");
    }

    const product = price.product as any;

    // Check if a Stripe customer record exists for this user
    const customers = await stripe.customers.list({ email: email, limit: 1 });
    console.log("CUSTOMERS: ", customers);
    console.log("PRICE: ", price);
    console.log("PRODUCT: ", product);
    
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Create a one-time payment session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          price: plan_id, // Use the Stripe price ID directly
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/abonnement?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/abonnement?payment=cancelled`,
      metadata: {
        user_id: user_id,
        plan_id: plan_id,
        plan_name: product.name,
        duration_days: product.metadata?.duration_days || "0"
      }
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Payment creation error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});