export async function getMenteeById(userId: string) {

    try {
        const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/get-mentee-by-id?id=${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Échec lors du chargement du mentee.");
        }

        return await res.json();
    } catch (error) {
        console.error("Erreur lors de la récupération du mentee :", error);
        throw error;
    }
}
