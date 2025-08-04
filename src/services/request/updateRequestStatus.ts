import { verifyToken } from "@/helpers/verifyToken";

type UpdateRequestStatusParams = {
  requestId: number;
  status: 'ACCEPTED' | 'REFUSED' | 'CANCELLED';
};

export async function updateRequestStatus({ requestId, status }: UpdateRequestStatusParams) {
  const token = verifyToken();
  if (!token) {
    throw new Error("Token non valide");
  }

  const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/update-request-status`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
    },
    body: JSON.stringify({ requestId, status }),
  });
  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to update request status");
  }

  return res.json();
} 