import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { v4 as uuidv4 } from 'https://esm.sh/uuid@9.0.0';
import bcrypt from 'https://esm.sh/bcryptjs@2.4.3';

serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
  
    const { fullName, email, password, role } = await req.json();
    
    // CORS Headers

    if (!fullName || !email || !password || !role) {
      return new Response(
        JSON.stringify({ message: 'Champs requis manquants.'}),
        { status: 400, headers: corsHeaders }
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Check if user already exists
    const { data: existingUser, error: existingUserError } = await supabase
      .from('User')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (existingUser) {
      return new Response(
        JSON.stringify({ message: 'Email déjà utilisé...' }),
        { status: 400, headers: corsHeaders  }
      );
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const userId = uuidv4();

    // Insert into User table
    const {data: user, error: userInsertError } = await supabase
      .from('User')
      .insert({
        id: userId,
        email,
        password_hash: passwordHash,
        role: role.toUpperCase(),
        is_verified: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (userInsertError) {
      console.error(userInsertError);
      return new Response(
        JSON.stringify({ message: 'Erreur lors de la création du compte utilisateur.' }),
        { status: 500, headers: corsHeaders }
      );
    }

    // Insert into appropriate profile table
    const profileId = uuidv4();
    let profile = null;

    if (role.toUpperCase() === 'MENTOR') {
      const {data: mentorProfile,  error: mentorError } = await supabase
      .from('MentorProfile')
      .insert({
        id: profileId,
        user_id: userId,
        fullname: fullName,
        avatar: '',
        location: '',
        languages: [],
        areas_of_expertise: [],
        experiences: [],
        diplomas: [],
        certifications: [],
        mentee_levels: [],
        description: '',
        availability: [],
        price_per_unit: "",
      })
      .select()
      .single();

      if (mentorError) {
        console.error(mentorError);
        return new Response(
          JSON.stringify({ message: 'Erreur lors de la création du profil mentor.' }),
          { status: 500, headers: corsHeaders }
        );
      }
      profile = mentorProfile;
    }

    if (role.toUpperCase() === 'MENTEE') {
      const {data: menteeProfile,  error: menteeError } = await supabase
        .from('MenteeProfile')
        .insert({
          id: profileId,
          user_id: userId,
          fullname: fullName,
          avatar: '',
          location: '',
          languages: [],
          education_level: '',
          description: '',
          objectives: '',
          subjects_of_interest: [],
          urgency: 'FLEXIBLE',
          preferences: '',
          budget: null,
        })
        .select()
        .single();

      if (menteeError) {
        console.error(menteeError);
        return new Response(
          JSON.stringify({ message: 'Erreur lors de la création du profil mentoré.' }),
          { status: 500, headers: corsHeaders }
        );
      }
      profile = menteeProfile;
    }

    let fullUser = null;

    if (user.role === "MENTOR") {
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
        profile: MentorProfile(*),
        receivedRequests: MentorshipRequest!MentorshipRequest_to_mentor_id_fkey(*, mentee: User!MentorshipRequest_from_mentee_id_fkey(email, phone, MenteeProfile(fullname))),
        ratings: Rating!Rating_mentor_id_fkey(*),
        subscriptions: Subscription!Subscription_user_id_fkey(*, plan: SubscriptionPlan!Subscription_plan_id_fkey(*)),
        visits: NumberOfVisits!NumberOfVisits_user_id_fkey(*)
      `)
      .eq("id", user.id)
      .single();

    if (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: "Erreur lors de la récupération du profil complet du mentor." }), {
        status: 500,
        headers: corsHeaders
      });
    }

    fullUser = data;
  }

  if (user.role === "MENTEE") {
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
        profile: MenteeProfile(*),
        sentRequests: MentorshipRequest!MentorshipRequest_from_mentee_id_fkey(*),
        subscriptions: Subscription!Subscription_user_id_fkey(*, plan: SubscriptionPlan!Subscription_plan_id_fkey(*))
      `)
      .eq("id", user.id)
      .single();

    if (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: "Erreur lors de la récupération du profil complet du mentoré." }), {
        status: 500,
        headers: corsHeaders
      });
    }

    fullUser = data;
  }

  // Send verification email
  // try {
  //   const sendRes = await fetch(Deno.env.get('VITE_SUPABASE_FUNCTION_URL') + '/send-verification-email', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`, },
  //     body: JSON.stringify({ email: user.email })
  //   });
  //   if (!sendRes.ok) {
  //     const errText = await sendRes.text();
  //     console.error('Erreur lors de l\'envoi de l\'email de vérification:', errText);
  //   }
  // } catch (e) {
  //   console.error('Erreur lors de l\'appel à send-verification-email:', e);
  // }

  // Return enriched user object
  return new Response(
    JSON.stringify({
      message: 'Inscription réussie',
      user: fullUser,
    }),
    { status: 200, headers: corsHeaders }
  );
  } catch (e) {
    console.error('Unexpected error:', e);
    return new Response(
      JSON.stringify({ message: 'Erreur interne du serveur.' }),
      { status: 500, headers: corsHeaders }
    );
  }
});