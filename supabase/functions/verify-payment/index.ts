import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Parse request body
    const body = await req.json();
    console.log("BODY: ", body);
    const { sessionId } = body;
    if (!sessionId) throw new Error("Session ID is required");

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (session.payment_status !== "paid") {
      throw new Error("Payment not completed");
    }

    // Use service role to update subscription
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const metadata = session.metadata;
    if (!metadata?.user_id || !metadata?.plan_id || !metadata?.duration_days) {
      throw new Error("Invalid session metadata");
    }

    // Calculate subscription dates
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + parseInt(metadata.duration_days));

    // Create subscription record
    const { error: subscriptionError } = await supabaseService
      .from("Subscription")
      .insert({
        user_id: metadata.user_id,
        plan_id: metadata.plan_id,
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
        is_active: true,
        stripe_session_id: sessionId,
        amount_paid: session.amount_total / 100,
        currency: session.currency
      });

    if (subscriptionError) {
      console.error("Subscription creation error:", subscriptionError);
      throw new Error("Failed to create subscription");
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Payment verified and subscription activated",
      subscription: {
        plan_name: metadata.plan_name,
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString()
      }
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Payment verification error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});