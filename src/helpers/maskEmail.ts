export function maskEmail(email: string): string {
  const [local, domain] = email.split("@");

    const mask = (part: string) => {
      if (part.length <= 2) return "*".repeat(part.length);
      return part[0] + "*".repeat(part.length - 2) + part[part.length - 1];
    };

    const [localPart, domainPart] = [
      local.split(".").map(mask).join("."),
      domain
    ];

    return `${localPart}@${domainPart}`;
} 