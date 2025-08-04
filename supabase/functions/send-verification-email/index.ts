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
    const { email, fullname } = await req.json();
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email requis.' }), { status: 400, headers: corsHeaders });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

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

    // Generate verification token
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

    const frontendUrl = Deno.env.get('FRONTEND_URL') || 'http://192.168.1.156:8080';
    const verificationLink = `${frontendUrl}/verify-email?token=${token}`;

    // Send email with SendGrid
    const sendgridApiKey = Deno.env.get('SENDGRID_API_KEY');
    const senderEmail = Deno.env.get('SENDGRID_FROM_EMAIL');
    if (!sendgridApiKey || !senderEmail) {
      return new Response(JSON.stringify({ error: 'SendGrid non configuré.' }), { status: 500, headers: corsHeaders });
    }

    const subject = 'Vérifiez votre adresse email';
    let html;
    if (fullname) {
      html = `
              <p>Bonjour, ${fullname}</p>
              <p>Merci de vous être inscrit. Veuillez cliquer sur le lien ci-dessous pour vérifier votre adresse email :</p>
              <p><a href="${verificationLink}">${verificationLink}</a></p>
              <p>Ce lien expirera dans 24 heures.</p>
            `;
    }
    else {
      html = `
            <p>Bonjour,</p>
            <p>Merci de vous être inscrit. Veuillez cliquer sur le lien ci-dessous pour vérifier votre adresse email :</p>
            <p><a href="${verificationLink}">${verificationLink}</a></p>
            <p>Ce lien expirera dans 24 heures.</p>
          `;
    }
    

    const emailRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sendgridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: user.email }],
            subject: subject,
          },
        ],
        from: { email: senderEmail, name: "MentorConnect" },
        content: [{ type: 'text/html', value: html }],
      }),
    });

    if (!emailRes.ok) {
      const errorText = await emailRes.text();
      return new Response(JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email: ' + errorText }), { status: 500, headers: corsHeaders });
    }

    return new Response(JSON.stringify({ success: true, message: 'Email de vérification envoyé.' }), { status: 200, headers: corsHeaders });
  } catch (e) {
    console.error('Unexpected error:', e);
    return new Response(JSON.stringify({ error: 'Erreur interne du serveur.' }), { status: 500, headers: corsHeaders });
  }
});
