import { verifyToken } from "@/helpers/verifyToken";

type MenteeProfileUpdate = {
  userId: string;
  fullname: string;
  email: string;
  phone?: string;
  location?: string;
  title?: string;
  languages?: string[];
  education_level?: string;
  description?: string;
  objectives?: string;
  subjects_of_interest?: string[];
  urgency?: string;
  preferences?: string;
  budget?: string;
  avatar?: string;
};

export async function updateMenteeProfile(data: MenteeProfileUpdate) {
    const token = verifyToken();
    if (!token) {
        throw new Error("Token non valide");
    }
    const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/update-mentee-profile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
    });
    
    if (!res.ok) {
        const errorData = await res.text();
        throw new Error(errorData || "Updating failed");
    }
  
    return res.json();
}
