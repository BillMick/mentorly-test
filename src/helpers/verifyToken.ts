// Helper to verify JWT token validity from localStorage
// Returns the token string if valid, otherwise null

function parseJwt(token: string) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

export function verifyToken(): string | null {
  const token = localStorage.getItem('token');
  if (!token) {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return null
  };
  const payload = parseJwt(token);
  if (!payload || !payload.exp) return null;
  // exp is in seconds since epoch
  const now = Math.floor(Date.now() / 1000);
  
  if (payload.exp < now) {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return null
  }
  return token;
} 