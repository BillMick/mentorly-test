export async function verifyEmailAddress(token: string) {
    const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/verify-email?token=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        }
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Erreur lors de la vérification de l'adresse mail.");
    }
    
    let responseData;
    try {
        responseData = await res.json();
    } catch (error) {
        throw new Error('Invalid JSON response from server...');
    }

    return responseData;
}
