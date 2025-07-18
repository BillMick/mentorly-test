import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("id");

    if (!userId) {
      return new Response(JSON.stringify({ error: "Missing user ID." }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const { data, error } = await supabase
      .from("User")
      .select(`id, email, phone, role, is_verified, created_at, updated_at,
          profile: MenteeProfile(*),
          sentRequests: MentorshipRequest!MentorshipRequest_from_mentee_id_fkey(
            *, mentor: User!MentorshipRequest_to_mentor_id_fkey(
              id, email, profile: MentorProfile(fullname)
            )
          ),
          subscriptions: Subscription!Subscription_user_id_fkey(*, plan: SubscriptionPlan!Subscription_plan_id_fkey(*))
        `)
      .eq("id", userId)
      .single();

    if (error || !data) {
      console.error("Fetch error:", error);
      return new Response(
        JSON.stringify({ error: "Mentee non trouvé." }),
        { status: 404, headers: corsHeaders }
      );
    }

    return new Response(JSON.stringify({ mentee: data }), {
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
