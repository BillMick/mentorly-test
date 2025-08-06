import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import bcrypt from "https://esm.sh/bcryptjs@2.4.3";
import { create } from "https://deno.land/x/djwt@v2.8/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true",
  "Content-Type": "application/json",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email and password are required." }),
        { status: 400, headers: corsHeaders }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );
    const jwtSecret = Deno.env.get("JWT_SECRET")!;
    if (!jwtSecret) throw new Error("JWT_SECRET is not set");

    const { data: user, error: fetchError } = await supabase
      .from("User")
      .select("*")
      .eq("email", email)
      .single();

    if (fetchError || !user) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials" }),
        { status: 401, headers: corsHeaders }
      );
    }

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials." }),
        { status: 401, headers: corsHeaders }
      );
    }

    // On récupère les données selon le rôle
    let fullUser = user;
    if (user.role === "MENTOR") {
      const { data, error } = await supabase
        .from("User")
        .select(`id, email, phone, role, is_verified, created_at, updated_at,
          profile: MentorProfile(*),
          receivedRequests: MentorshipRequest!MentorshipRequest_to_mentor_id_fkey(*),
          ratings: Rating!Rating_mentor_id_fkey(*),
          subscriptions: Subscription!Subscription_user_id_fkey(*, plan: SubscriptionPlan!Subscription_plan_id_fkey(*)),
          visits: NumberOfVisits!NumberOfVisits_user_id_fkey(*)`)
        .eq("email", email)
        .single();
      if (error || !data) {
        console.error(error);
        return new Response(
          JSON.stringify({ error: "Mentor profile not found." }),
          { status: 500, headers: corsHeaders }
        );
      }
      fullUser = data;
    } else if (user.role === "MENTEE") {
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
        .eq("email", email)
        .single();
      if (error || !data) {
        console.error(error);
        return new Response(
          JSON.stringify({ error: "Mentee profile not found." }),
          { status: 500, headers: corsHeaders }
        );
      }
      fullUser = data;
    }

    // Création du token JWT
    const payload = {
      sub: fullUser.id,
      email: fullUser.email,
      role: fullUser.role,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 2, // validity of 2h
    };

    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(jwtSecret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign", "verify"]
    );

    const token = await create({ alg: "HS256", typ: "JWT" }, payload, key);

    return new Response(
      JSON.stringify({
        success: true,
        token,
        user: fullUser,
        message: "Connexion réussie",
      }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: corsHeaders }
    );
  }
});
