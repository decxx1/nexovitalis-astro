export const site = {
  phone: import.meta.env.PUBLIC_PHONE ?? '',
  phoneFormat: import.meta.env.PUBLIC_PHONE_FORMAT ?? '',
  email: import.meta.env.PUBLIC_EMAIL ?? '',
  mapUrl: import.meta.env.PUBLIC_MAPURL ?? '',
  address: import.meta.env.PUBLIC_ADDRESS ?? '',
  instagram: import.meta.env.PUBLIC_INSTAGRAM ?? '',
  facebook: import.meta.env.PUBLIC_FACEBOOK ?? '',
  linkedin: import.meta.env.PUBLIC_LINKEDIN ?? '',
  contactEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT ?? '',
  recaptchaSiteKey: import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY ?? '',
  recaptchaSecretKey: import.meta.env.PUBLIC_RECAPTCHA_SECRET_KEY ?? '',
} as const;

export const whatsAppUrl = site.phoneFormat
  ? `https://wa.me/${site.phoneFormat}`
  : '#';
