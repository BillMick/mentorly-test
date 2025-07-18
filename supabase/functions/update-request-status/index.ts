// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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
    const { requestId, status } = await req.json();
    if (!requestId || !status) {
      return new Response(JSON.stringify({ error: 'Missing requestId or status' }), { status: 400, headers: corsHeaders });
    }
    
    // Fetch current request data
    const { data: request, error: fetchError } = await supabase
      .from('MentorshipRequest')
      .select('status, responded_at')
      .eq('id', requestId)
      .maybeSingle();
      
    if (fetchError || !request) {
      return new Response(JSON.stringify({ error: 'Request not found' }), { status: 404, headers: corsHeaders });
    }
    
    // Check if request is already responded to
    if (request.responded_at) {
      return new Response(JSON.stringify({ error: 'Request has already been responded to' }), { status: 400, headers: corsHeaders });
    }
    
    // Validate status transitions
    if (status === 'ACCEPTED' && request.status === 'CANCELLED') {
      return new Response(JSON.stringify({ error: 'Cannot accept a cancelled request.' }), { status: 400, headers: corsHeaders });
    }
    
    if (status === 'REFUSED' && request.status === 'CANCELLED') {
      return new Response(JSON.stringify({ error: 'Cannot refuse a cancelled request.' }), { status: 400, headers: corsHeaders });
    }
    
    // Prepare update data
    const updateData: { status: string; responded_at?: string } = { status };
    
    // Set responded_at timestamp for ACCEPTED or REFUSED status
    if (status === 'ACCEPTED' || status === 'REFUSED' || status === 'CANCELLED') {
      updateData.responded_at = new Date().toISOString();
    }
    
    // Update status and responded_at
    const { error: updateError } = await supabase
      .from('MentorshipRequest')
      .update(updateData)
      .eq('id', requestId);
      
    if (updateError) {
      return new Response(JSON.stringify({ error: 'Failed to update status' }), { status: 500, headers: corsHeaders });
    }
    
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: corsHeaders });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: corsHeaders });
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/update-request-status' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
