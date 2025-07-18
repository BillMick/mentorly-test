// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";


serve(async (req) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );
    const { mentor_id, visitor_id, rating, comment, is_anonymous } = await req.json();
    if (!mentor_id || !visitor_id || !rating) {
      return new Response(
        JSON.stringify({ error: "mentor_id, visitor_id, and rating are required." }),
        { status: 400, headers: corsHeaders }
      );
    }
    if (rating < 1 || rating > 5) {
      return new Response(
        JSON.stringify({ error: "Rating must be between 1 and 5." }),
        { status: 400, headers: corsHeaders }
      );
    }
    if (mentor_id === visitor_id) {
      return new Response(
        JSON.stringify({ error: "Cannot rate yourself." }),
        { status: 400, headers: corsHeaders }
      );
    }
    // Check if rating already exists
    const { data: existingRating } = await supabase
      .from("Rating")
      .select("id")
      .eq("mentor_id", mentor_id)
      .eq("visitor_id", visitor_id)
      .maybeSingle();
    let result;
    // if (existingRating) {
    //   // Update existing rating
    //   result = await supabase
    //     .from("Rating")
    //     .update({ rating, comment, is_anonymous: is_anonymous || false })
    //     .eq("id", existingRating.id)
    //     .select()
    //     .single();
    // } 
    // else {
      // Insert new rating
      result = await supabase
        .from("Rating")
        .insert({ mentor_id, visitor_id, rating, comment, is_anonymous: is_anonymous || false })
        .select()
        .single();
    // }
    if (result.error) {
      return new Response(
        JSON.stringify({ error: result.error.message }),
        { status: 500, headers: corsHeaders }
      );
    }
    return new Response(
      JSON.stringify({ success: true, rating: result.data }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal server error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/rate-mentor' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
