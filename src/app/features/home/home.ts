import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly companyName = SITE_CONFIG.companyName;
  readonly productName = SITE_CONFIG.productName;
  readonly whatsappUrl = SITE_CONFIG.defaultWhatsappUrl;
  readonly businessSectors = SITE_CONFIG.businessSectors;

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Software de gestión y reservas para negocios reales',
      description: 'SP SoftTechnology presenta Flow: organiza reservas, horarios, empleados y clientes para barberías, peluquerías, salones de belleza, spas y estudios de tatuajes.',
      path: '/',
      schemaType: 'software'
    });
  }
}

