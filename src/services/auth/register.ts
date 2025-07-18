export const registerUser = async ({
    fullName,
    email,
    password,
    role,
  }: {
    fullName: string;
    email: string;
    password: string;
    role: string;
  }) => {
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/create-user`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ fullName, email, password, role }),
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erreur lors de l\'inscription');
    }
    return response.json();
  };
  