export async function getSubscriptionPlans() {
    try {
        const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/get-subscription-plans`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
        });
        // console.log("RES: ", await res.json());
        
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(errorText || "Échec lors du chargement des mentors.");
        }

        return await res.json();
    } catch (error) {
        console.error("Erreur lors de la récupération des mentors :", error);
        throw error;
    }
}
