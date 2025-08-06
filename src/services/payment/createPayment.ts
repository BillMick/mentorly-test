import { verifyToken } from "@/helpers/verifyToken";

export async function createPayment(plan_id: string, user_id: string, email: string) {
    const token = verifyToken();
    if (!token) throw new Error("Utilisateur non authentifié");
    
    const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/create-payment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ plan_id, user_id, email })
    });
    
    const data = await res.json();
    if (!res.ok || !data.url) {
        throw new Error(data.error || "Erreur lors de la création du paiement");
    }
    
    return data;
}