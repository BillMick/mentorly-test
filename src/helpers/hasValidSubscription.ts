export function hasValidSubscription(user: any): boolean {
  if (!user || !Array.isArray(user.subscriptions) || user.subscriptions.length === 0) {
    return false;
  }
  // Find the most recent subscription by end_date
  const now = new Date();
  const sorted = [...user.subscriptions].sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
  const latest = sorted[0];
  if (!latest) return false;
  return latest.is_active && new Date(latest.end_date) >= now;
} 