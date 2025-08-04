import { verifyToken } from "@/helpers/verifyToken";

export async function unsubscribe(userId: string) {
  const token = verifyToken();
  if (!token) throw new Error("Utilisateur non authentifié");
  const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/unsubscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ userId }),
  });
  
  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Erreur lors de la résiliation de l'abonnement");
  }
  return data;
} 