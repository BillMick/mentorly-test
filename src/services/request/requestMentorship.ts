import { verifyToken } from "@/helpers/verifyToken";

type RequestMentorshipParams = {
    from_mentee_id: string,
    to_mentor_id: string,
    subject: string,
    message: string,
};

export async function requestMentorship({ from_mentee_id, to_mentor_id, subject, message }: RequestMentorshipParams) {
    const token = verifyToken();
    if (!token) {
        throw new Error("Token non valide");
    }

    const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/request-mentorship`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ from_mentee_id, to_mentor_id, subject, message }),
    });
  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Erreur lors de l'envoi de la demande.");
  }

  return res.json();
} 