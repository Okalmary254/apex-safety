const required = (key: string): string => {
  const val = import.meta.env[key];
  if (!val) throw new Error(`Missing environment variable: ${key}`);
  return val;
};

export const EMAILJS_CONFIG = {
  PUBLIC_KEY:      required('VITE_EMAILJS_PUBLIC_KEY'),
  SERVICE_ID:      required('VITE_EMAILJS_SERVICE_ID'),
  TEMPLATE_ID:     required('VITE_EMAILJS_TEMPLATE_ID'),
  RECIPIENT_EMAIL: required('VITE_EMAILJS_RECIPIENT'),
};