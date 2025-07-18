import { verifyToken } from "@/helpers/verifyToken";

type MentorProfileUpdate = {
  userId: string;
  fullname: string;
  email: string;
  phone?: string;
  location?: string;
  title?: string;
  languages?: string[];
  areas_of_expertise?: string[];
  experiences?: string[];
  diplomas?: string[];
  certifications?: string[];
  mentee_levels?: string[];
  description?: string;
  availability?: string[];
  price_per_unit?: string;
  avatar?: string;
};

export async function updateMentorProfile(data: MentorProfileUpdate) {
    const token = verifyToken();
    if (!token) {
        throw new Error("Token non valide");
    }
    const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/update-mentor-profile`, {
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
