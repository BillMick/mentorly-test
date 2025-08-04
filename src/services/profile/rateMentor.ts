import { verifyToken } from "@/helpers/verifyToken";

export async function rateMentor({ mentor_id, visitor_id, rating, comment, is_anonymous }: { mentor_id: string, visitor_id: string, rating: number, comment?: string, is_anonymous?: boolean }) {
  const token = verifyToken();
  if (!token) throw new Error("Utilisateur non authentifié");
  const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/rate-mentor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ mentor_id, visitor_id, rating, comment, is_anonymous }),
  });
  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Erreur lors de l'envoi de la note");
  }
  return data.rating;
} 