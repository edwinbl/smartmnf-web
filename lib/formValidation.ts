export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export const isMobile = (v: string) => /^[0-9]{10}$/.test(v.replace(/\D/g, ""));

export const required = (v: string) => v.trim().length > 0;
