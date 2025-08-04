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
      education_level,
      description,
      objectives,
      subjects_of_interest,
      urgency,
      preferences,
      budget,
      avatar
    } = await req.json();

    if (!userId || !fullname || !email) {
      return new Response(
        JSON.stringify({ message: "Champs requis manquants." }),
        { status: 400, headers: corsHeaders }
      );
    }

    // 1. Update User table
    if (phone) {
      const { error: userUpdateError } = await supabase
        .from("User")
        .update({ phone: phone, updated_at: new Date().toISOString() })
        .eq("id", userId);

      if (userUpdateError) {
        console.error("Erreur mise à jour téléphone :", userUpdateError);
        return new Response(
          JSON.stringify({ message: "Erreur mise à jour téléphone." }),
          { status: 500, headers: corsHeaders }
        );
      }
    }

    // 2. Upsert into MenteeProfile
    const { data: existingProfile } = await supabase
      .from("MenteeProfile")
      .select("id")
      .eq("user_id", userId)
      .maybeSingle();

    let result;
    if (existingProfile) {
      result = await supabase
        .from("MenteeProfile")
        .update({
          fullname,
          location,
          title,
          languages,
          education_level,
          description,
          objectives,
          subjects_of_interest,
          urgency,
          preferences,
          budget,
          avatar
        })
        .eq("user_id", userId);
    } else {
      result = await supabase
        .from("MenteeProfile")
        .insert({
          user_id: userId,
          fullname,
          location,
          title,
          languages,
          education_level,
          description,
          objectives,
          subjects_of_interest,
          urgency,
          preferences,
          budget,
          avatar
        });
    }

    if (result.error) {
      console.error("Erreur mise à jour profil mentee :", result.error);
      return new Response(
        JSON.stringify({ message: "Erreur lors de la mise à jour du profil mentee." }),
        { status: 500, headers: corsHeaders }
      );
    }

    // 3. Return updated user + profile
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
        profile: MenteeProfile(*),
        sentRequests: MentorshipRequest!MentorshipRequest_from_mentee_id_fkey(
          *,
          mentor: User!MentorshipRequest_to_mentor_id_fkey(
            id,
            email,
            profile: MentorProfile(fullname)
          )
        ),
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
      JSON.stringify({ message: "Profil mentee mis à jour avec succès", user }),
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