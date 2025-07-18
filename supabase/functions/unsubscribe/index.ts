// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );
    const { userId } = await req.json();
    if (!userId) {
      return new Response(
        JSON.stringify({ error: "userId is required." }),
        { status: 400, headers: corsHeaders }
      );
    }
    // Find latest active subscription
    const { data: sub, error: subError } = await supabase
      .from("Subscription")
      .select("id, is_active, end_date")
      .eq("user_id", userId)
      .eq("is_active", true)
      .order("end_date", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (subError || !sub) {
      return new Response(
        JSON.stringify({ error: "No active subscription found." }),
        { status: 404, headers: corsHeaders }
      );
    }
    // Set is_active=false and end_date=now
    const now = new Date().toISOString();
    const { error: updateError } = await supabase
      .from("Subscription")
      .update({ is_active: false, end_date: now })
      .eq("id", sub.id);
    if (updateError) {
      return new Response(
        JSON.stringify({ error: "Failed to unsubscribe." }),
        { status: 500, headers: corsHeaders }
      );
    }
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal server error." }),
      { status: 500, headers: corsHeaders }
    );
  }
}); 