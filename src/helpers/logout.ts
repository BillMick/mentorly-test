// Helper to handle user logout
// Removes the JWT token and optionally other user-related data from localStorage

export function logout() {
  localStorage.removeItem('token');
  // Optionally clear other user-related data here
  localStorage.removeItem('user');
  localStorage.clear(); // Uncomment to clear all localStorage
} 