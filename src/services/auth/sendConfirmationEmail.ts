export async function sendConfirmationEmail({ id, email, fullname }: { id: string, email: string, fullname: string }) {
  const api_url = import.meta.env.API_URL || 'http://localhost:5001/api';
  
  const sendRes = await fetch(`${api_url}/send-verification-email`, {
    method: 'POST',
    headers: {
      'Accept':'*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, email, fullname })
  });

  if (!sendRes.ok) {
    const error = await sendRes.json();
    throw new Error(error.message || 'Erreur lors de l\'inscription');
  }
  
  let responseData;
  try {
    responseData = await sendRes.json();
  } catch (error) {
    throw new Error('Invalid JSON response from server...');
  }

  return responseData;
}
