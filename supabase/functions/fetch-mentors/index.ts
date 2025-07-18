import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import bcrypt from 'https://esm.sh/bcryptjs@2.4.3';


const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

serve(async (req) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    // Fetch mentors with profiles, ratings, and number of visits
    const { data, error } = await supabase
      .from("User")
      .select(`
        id,
        email,
        phone,
        role,
        is_verified,
        created_at,
        updated_at,
        profile: MentorProfile (*),
        receivedRequests: MentorshipRequest!MentorshipRequest_to_mentor_id_fkey(*),
        ratings: Rating!Rating_mentor_id_fkey(*),
        visits: NumberOfVisits!NumberOfVisits_user_id_fkey(*),
        subscriptions: Subscription!Subscription_user_id_fkey(*, plan: SubscriptionPlan!Subscription_plan_id_fkey(*))
      `)
      .eq("role", "MENTOR");
      // .is("is_verified", true);

    if (error) {
      console.error("Supabase fetch error:", error);
      return new Response(
        JSON.stringify({ error: "Erreur lors de la récupération des mentors." }),
        { status: 500, headers: corsHeaders }
      );
    }
    return new Response(JSON.stringify({mentors: data}), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Erreur interne du serveur." }),
      { status: 500, headers: corsHeaders }
    );
  }
});