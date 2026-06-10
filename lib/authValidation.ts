export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export const isMobile = (v: string) => /^[0-9]{10}$/.test(v.replace(/\D/g, ""));

export type PasswordStrength = "empty" | "weak" | "medium" | "strong";

export const passwordStrength = (v: string): PasswordStrength => {
  if (!v) return "empty";
  let score = 0;
  if (v.length >= 8) score++;
  if (/[A-Z]/.test(v)) score++;
  if (/[0-9]/.test(v)) score++;
  if (/[^A-Za-z0-9]/.test(v)) score++;
  if (v.length >= 12) score++;
  if (score <= 2) return "weak";
  if (score === 3) return "medium";
  return "strong";
};

export const isValidPassword = (v: string) =>
  v.length >= 8 && /[A-Z]/.test(v) && /[0-9]/.test(v);

export const required = (v: string) => v.trim().length > 0;
