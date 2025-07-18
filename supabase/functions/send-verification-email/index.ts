import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { create } from "https://deno.land/x/djwt@v2.8/mod.ts";

serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email requis.' }), { status: 400, headers: corsHeaders });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Find user by email
    const { data: user, error } = await supabase
      .from('User')
      .select('id, email, is_verified')
      .eq('email', email)
      .single();

    if (error || !user) {
      return new Response(JSON.stringify({ error: 'Utilisateur non trouvé.' }), { status: 404, headers: corsHeaders });
    }

    if (user.is_verified) {
      return new Response(JSON.stringify({ message: 'Email déjà vérifié.' }), { status: 200, headers: corsHeaders });
    }

    // Generate a verification token (JWT)
    const jwtSecret = Deno.env.get('JWT_SECRET')!;
    const payload = {
      sub: user.id,
      email: user.email,
      type: 'email_verification',
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24h
    };
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(jwtSecret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign', 'verify']
    );
    const token = await create({ alg: 'HS256', typ: 'JWT' }, payload, key);

    // Compose verification link
    const frontendUrl = Deno.env.get('FRONTEND_URL') || 'http://192.168.1.156:8080';
    const verificationLink = `${frontendUrl}/verify-email?token=${token}`;

    // Send email using Resend
    // const resendApiKey = Deno.env.get('RESEND_API_KEY');
    // const resendFromEmail = Deno.env.get('RESEND_FROM_EMAIL');
    // if (!resendApiKey || !resendFromEmail) {
    //   return new Response(JSON.stringify({ error: 'Email provider not configured.' }), { status: 500, headers: corsHeaders });
    // }
    // const subject = 'Vérifiez votre adresse email';
    // const html = `<p>Bonjour,</p><p>Merci de vous être inscrit. Veuillez cliquer sur le lien ci-dessous pour vérifier votre adresse email :</p><p><a href="${verificationLink}">${verificationLink}</a></p><p>Ce lien expirera dans 24 heures.</p>`;
    // const emailRes = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${resendApiKey}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: resendFromEmail,
    //     to: user.email,
    //     subject,
    //     html,
    //   }),
    // });
    // Send email using Gmail SMTP
    const gmailUser = Deno.env.get('GMAIL_USER');
    const gmailPass = Deno.env.get('GMAIL_PASS');
    if (!gmailUser || !gmailPass) {
      return new Response(JSON.stringify({ error: 'Gmail SMTP not configured.' }), { status: 500, headers: corsHeaders });
    }

    const client = new SmtpClient();
    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 465,
      username: gmailUser,
      password: gmailPass,
    });

    const subject = "Vérifiez votre adresse email";
    const html = `<p>Bonjour,</p><p>Merci de vous être inscrit. Veuillez cliquer sur le lien ci-dessous pour vérifier votre adresse email :</p><p><a href="${verificationLink}">${verificationLink}</a></p><p>Ce lien expirera dans 24 heures.</p>`;

    const emailRes = await client.send({
      from: gmailUser,
      to: user.email,
      subject,
      content: html,
      html,
    });

    await client.close();

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      return new Response(JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email: ' + errText }), { status: 500, headers: corsHeaders });
    }

    return new Response(JSON.stringify({ message: 'Email de vérification envoyé.' }), { status: 200, headers: corsHeaders });
  } catch (e) {
    console.error('Unexpected error:', e);
    return new Response(JSON.stringify({ error: 'Erreur interne du serveur.' }), { status: 500, headers: corsHeaders });
  }
}); 