export interface NavItem {
  label: string;
  path: string;
}

export interface BusinessSector {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

export const SITE_CONFIG = {
  companyName: 'SP SoftTechnology',
  productName: 'Flow',
  whatsappNumber: '3016743186',
  whatsappCountryCode: '57',
  whatsappBaseUrl: 'https://wa.me/573016743186',
  defaultWhatsappMessage: 'Hola, quiero conocer Flow para mi negocio.',
  get defaultWhatsappUrl(): string {
    return `${this.whatsappBaseUrl}?text=${encodeURIComponent(this.defaultWhatsappMessage)}`;
  },
  createWhatsappUrl(customMessage: string): string {
    return `${this.whatsappBaseUrl}?text=${encodeURIComponent(customMessage)}`;
  },
  navItems: [
    { label: 'Inicio', path: '/' },
    { label: 'Flow', path: '/flow' },
    { label: 'Precios', path: '/precios' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Contacto', path: '/contacto' },
  ] as NavItem[],
  businessSectors: [
    {
      id: 'barberias',
      name: 'Barberías',
      description: 'Organiza citas, turnos de barberos y tiempos por servicio sin cruces de agenda ni cancelaciones de última hora.',
      image: '/assets/images/landing/barberias.webp',
      alt: 'Barbería moderna con sillón clásico y estación de corte'
    },
    {
      id: 'peluquerias',
      name: 'Peluquerías y salones de belleza',
      description: 'Controla citas para estilistas y manicuristas, tiempos de atención y disponibilidad en un panel claro.',
      image: '/assets/images/landing/peluquerias.webp',
      alt: 'Salón de belleza y peluquería profesional con puestos de atención'
    },
    {
      id: 'spas',
      name: 'Spas y bienestar',
      description: 'Gestiona cabinas, terapeutas y sesiones de relajación con horarios precisos que garantizan una experiencia puntual.',
      image: '/assets/images/landing/spas.webp',
      alt: 'Ambiente relajante de spa para bienestar y cuidado personal'
    },
    {
      id: 'tatuajes',
      name: 'Estudios de tatuajes',
      description: 'Coordina la agenda de citas, disponibilidad de los artistas y servicios generales de tu estudio en un solo lugar.',
      image: '/assets/images/landing/estudios-tatuajes.webp',
      alt: 'Estudio de tatuajes enfocado en organización de citas y sesiones'
    }
  ] as BusinessSector[]
} as const;

