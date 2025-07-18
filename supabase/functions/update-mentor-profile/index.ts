import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import bcrypt from 'https://esm.sh/bcryptjs@2.4.3';


const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
    "Content-Type": "application/json"
  };
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }
  try {
    const {
      userId,
      fullname,
      email,
      phone,
      location,
      title,
      languages,
      areas_of_expertise,
      experiences,
      diplomas,
      certifications,
      mentee_levels,
      description,
      availability,
      price_per_unit,
      avatar
    } = await req.json();

    // Basic validation
    if (!userId || !fullname || !email) {
      return new Response(
        JSON.stringify({ message: "Champs requis manquants." }),
        { status: 400, headers: corsHeaders }
      );
    }

    // 1. Update `User` table with phone (if provided)
    if (phone) {
      const { error: userUpdateError } = await supabase
        .from("User")
        .update({ phone: phone, updated_at: new Date().toISOString() })
        .eq("id", userId);

      if (userUpdateError) {
        console.error("Erreur lors de la mise à jour du téléphone :", userUpdateError);
        return new Response(
          JSON.stringify({ message: "Erreur lors de la mise à jour du numéro de téléphone." }),
          { status: 500, headers: corsHeaders }
        );
      }
    }

    // 2. Upsert into `MentorProfile`
    const { data: existingProfile } = await supabase
      .from("MentorProfile")
      .select("id")
      .eq("user_id", userId)
      .maybeSingle();

    let result;
    if (existingProfile) {
      result = await supabase
        .from("MentorProfile")
        .update({
          fullname,
          location,
          title,
          languages,
          areas_of_expertise,
          experiences,
          diplomas,
          certifications,
          mentee_levels,
          description,
          availability,
          price_per_unit,
          avatar,
        })
        .eq("user_id", userId);
    } else {
      result = await supabase.from("MentorProfile").insert({
        user_id: userId,
        fullname,
        location,
        title,
        languages,
        areas_of_expertise,
        experiences,
        diplomas,
        certifications,
        mentee_levels,
        description,
        availability,
        price_per_unit,
        avatar,
      });
    }

    if (result.error) {
      console.error("Erreur profil mentor :", result.error);
      return new Response(
        JSON.stringify({ message: "Erreur lors de la mise à jour du profil mentor." }),
        { status: 500, headers: corsHeaders }
      );
    }

    // 3. Fetch enriched user data
    const { data: user, error: fetchError } = await supabase
      .from("User")
      .select(`
        id,
        email,
        phone,
        role,
        is_verified,
        created_at,
        updated_at,
        profile: MentorProfile(*),
        receivedRequests: MentorshipRequest!MentorshipRequest_to_mentor_id_fkey(*),
        ratings: Rating!Rating_mentor_id_fkey(*),
        visits: NumberOfVisits!NumberOfVisits_user_id_fkey(*),
        subscriptions: Subscription!Subscription_user_id_fkey(*, plan: SubscriptionPlan!Subscription_plan_id_fkey(*))
      `)
      .eq("id", userId)
      .single();

    if (fetchError) {
      console.error("Erreur récupération utilisateur :", fetchError);
      return new Response(
        JSON.stringify({ message: "Erreur lors de la récupération du profil complet." }),
        { status: 500, headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Profil mis à jour avec succès",
        user,
      }),
      { status: 200, headers: corsHeaders }
    );

  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
