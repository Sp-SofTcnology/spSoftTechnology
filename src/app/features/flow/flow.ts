import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-flow',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './flow.html',
  styleUrl: './flow.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlowComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly companyName = SITE_CONFIG.companyName;
  readonly productName = SITE_CONFIG.productName;
  readonly whatsappUrl = SITE_CONFIG.defaultWhatsappUrl;
  readonly businessSectors = SITE_CONFIG.businessSectors;

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Flow | Plataforma de reservas y gestión para tu negocio',
      description: 'Conoce Flow: organiza citas, clientes, horarios, colaboradores y sucursales en un solo lugar. Clientes reservan sin crear cuenta.',
      path: '/flow',
      schemaType: 'software'
    });
  }
}

