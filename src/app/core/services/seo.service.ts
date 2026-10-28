import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { SITE_CONFIG } from '../config/site.config';

export interface SeoMetadata {
  title: string;
  description: string;
  path?: string;
  schemaType?: 'website' | 'software';
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);

  updateMetadata(metadata: SeoMetadata): void {
    const fullTitle = `${metadata.title} | ${SITE_CONFIG.companyName}`;
    this.titleService.setTitle(fullTitle);

    this.metaService.updateTag({ name: 'description', content: metadata.description });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: metadata.description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:locale', content: 'es_CO' });

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: metadata.description });

    this.injectJsonLd(metadata);
  }

  private injectJsonLd(metadata: SeoMetadata): void {
    const scriptId = 'sp-softtechnology-schema';
    let scriptElement = this.document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!scriptElement) {
      scriptElement = this.document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      this.document.head.appendChild(scriptElement);
    }

    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.companyName,
      description: 'Desarrollo de software y soluciones tecnológicas accesibles para pequeñas y medianas empresas.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: `+${SITE_CONFIG.whatsappCountryCode}-${SITE_CONFIG.whatsappNumber}`,
        contactType: 'sales',
        availableLanguage: ['Spanish']
      }
    };

    const siteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_CONFIG.companyName,
      inLanguage: 'es-CO',
      description: metadata.description
    };

    const softwareSchema = metadata.schemaType === 'software' ? {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: SITE_CONFIG.productName,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      provider: {
        '@type': 'Organization',
        name: SITE_CONFIG.companyName
      },
      description: 'Plataforma para organización de reservas, servicios, colaboradores, horarios y sucursales en barberías, peluquerías, salones de belleza, spas y estudios de tatuajes.'
    } : null;

    const schemaGraph = softwareSchema ? [orgSchema, siteSchema, softwareSchema] : [orgSchema, siteSchema];
    scriptElement.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemaGraph
    });
  }
}

