export const site = {
  name: 'InkwellCX',
  url: 'https://inkwellcx.com',
  description:
    'South Africa-based website design, SEO, hosting, and website management for small businesses that need faster, higher-converting websites.',
  email: 'support@inkwellcx.com',
  phone: '+27 71 092 1755',
  whatsapp: 'https://wa.me/27710921755',
  instagram: 'https://www.instagram.com/inkwell_cx/',
  areaServed: 'South Africa',
  socialProfiles: ['https://www.instagram.com/inkwell_cx/'],
};

export function absoluteUrl(path = '/') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${site.url}${cleanPath}`;
}
