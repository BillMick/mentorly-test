import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { verify } from "https://deno.land/x/djwt@v2.8/mod.ts";

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
    const url = new URL(req.url);
    const token = url.searchParams.get('token');

    if (!token) {
      return new Response(JSON.stringify({ error: 'Token manquant.' }), { status: 400, headers: corsHeaders });
    }

    const jwtSecret = Deno.env.get('JWT_SECRET')!;
    
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(jwtSecret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    let payload;
    try {
      payload = await verify(token, key);
    } catch (e) {
      console.error("JWT verification failed:", e);
      return new Response(JSON.stringify({ error: 'Token invalide ou expiré.' }), { status: 400, headers: corsHeaders });
    }


    if (!payload || payload.type !== 'email_verification' || !payload.sub) {
      return new Response(JSON.stringify({ error: 'Token de vérification invalide.' }), { status: 400, headers: corsHeaders });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Update user to set is_verified = true
    const { error } = await supabase
      .from('User')
      .update({ is_verified: true })
      .eq('id', payload.sub);

    if (error) {
      return new Response(JSON.stringify({ error: 'Erreur lors de la mise à jour de la vérification.' }), { status: 500, headers: corsHeaders });
    }

    return new Response(JSON.stringify({success: true, message: 'Email vérifié avec succès.' }), { status: 200, headers: corsHeaders });
  } catch (e) {
    console.error('Unexpected error:', e);
    return new Response(JSON.stringify({ error: 'Erreur interne du serveur.' }), { status: 500, headers: corsHeaders });
  }
}); 