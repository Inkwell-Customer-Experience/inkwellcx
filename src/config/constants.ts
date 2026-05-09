// Configuration and constants
export const config = {
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@inkwellcx.com',
    whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '27710921755',
    whatsappUrl: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '27710921755'}`,
    instagramUrl: 'https://www.instagram.com/inkwell_cx/',
  },
};
