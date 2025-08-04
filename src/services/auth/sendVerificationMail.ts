export async function sendVerificationMail({ email, fullname = "" }: { email: string, fullname: string | "" }) {
  const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/send-verification-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
    },
    body: JSON.stringify({ email, fullname })
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Erreur lors de l'envoi du mail");
  }
  
  let responseData;
  try {
    responseData = await res.json();
  } catch (error) {
    throw new Error('Invalid JSON response from server...');
  }

  return responseData;
}
