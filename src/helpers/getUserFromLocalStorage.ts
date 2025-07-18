export function getUserFromLocalStorage() {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) return null;
  try {
    const parsed = JSON.parse(storedUser);
    if (parsed.expiresAt && Date.now() > parsed.expiresAt + 12 * 60 * 60 * 1000) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return null;
    }
    return parsed.user || null;
  } catch {
    return null;
  }
} 