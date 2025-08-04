import { verifyToken } from "@/helpers/verifyToken";

export async function proposeMentorship({ fromMentorId, toMenteeId, subject, message }: { fromMentorId: string, toMenteeId: string, subject: string, message: string }) {
  const token = verifyToken();
  if (!token) throw new Error("Utilisateur non authentifié");
  const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/propose-mentorship`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ from_mentor_id: fromMentorId, to_mentee_id: toMenteeId, subject, message }),
  });
  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Erreur lors de la proposition de mentorat");
  }
  return data;
} 