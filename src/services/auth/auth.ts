export async function loginUser(email: string, password: string) {
    const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/login`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
    },
          body: JSON.stringify({ email, password }),
    });
  
    if (!res.ok) {
        const errorData = await res.text();
        throw new Error(errorData || "Login failed");
    }
  
    return res.json();
}
  