import { verifyToken } from "@/helpers/verifyToken";

export async function subscribe(userId: string, planId: string) {
    const token = verifyToken();
    if (!token) throw new Error("Utilisateur non authentifié");
    const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/subscribe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ userId, planId })
        });
    const data = await res.json();
    if (!res.ok || !data.success) {
        throw new Error(data.error || "Erreur lors de la souscription à l'abonnement");
    }
    return data;
} 