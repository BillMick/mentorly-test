// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

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
    const { mentorUserId, visitorUserId } = await req.json();
    if (!mentorUserId || !visitorUserId) {
      return new Response(
        JSON.stringify({success: false, error: "Missing mentorUserId or visitorUserId." }),
        { status: 400, headers: corsHeaders }
      );
    }
    if (mentorUserId === visitorUserId) {
      // Don't count self-visits
      return new Response(
        JSON.stringify({ success: true, message: "Self-visit not counted." }),
        { status: 200, headers: corsHeaders }
      );
    }
    // Check if this visitor has already visited this mentor
    const { data: existing, error: fetchError } = await supabase
      .from("NumberOfVisits")
      .select("id, visited_at")
      .eq("user_id", mentorUserId)
      .eq("visitor_id", visitorUserId)
      .order("visited_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (fetchError) {
      return new Response(
        JSON.stringify({success: false, error: "Error fetching visit record." }),
        { status: 500, headers: corsHeaders }
      );
    }
    if (existing) {
      // Check if last visit is older than 14 days
      const lastVisit = new Date(existing.visited_at);
      const now = new Date();
      const diffDays = (now.getTime() - lastVisit.getTime()) / (1000 * 60 * 60 * 24);
      if (diffDays < 14) {
        // Already visited within 14 days, do not count again
        return new Response(
          JSON.stringify({ success: true, message: "Already visited within 14 days." }),
          { status: 200, headers: corsHeaders }
        );
      }
      // else, allow new visit
    }
    // Insert new visit
    const { error: insertError } = await supabase
      .from("NumberOfVisits")
      .insert({ user_id: mentorUserId, visitor_id: visitorUserId });
    if (insertError) {
      return new Response(
        JSON.stringify({ success: false, error: "Error inserting visit record." }),
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

