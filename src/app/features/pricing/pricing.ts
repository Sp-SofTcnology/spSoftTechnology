import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly companyName = SITE_CONFIG.companyName;
  readonly whatsappPricingUrl = SITE_CONFIG.createWhatsappUrl('Hola, deseo consultar los planes y opciones disponibles para Flow.');

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Planes y asesoría comercial',
      description: 'Conoce cómo se estructuran los planes de Flow para tu negocio. Asesoría directa y personalizada vía WhatsApp.',
      path: '/precios',
      schemaType: 'software'
    });
  }
}

