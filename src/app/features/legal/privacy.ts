import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './privacy.html',
  styleUrl: './legal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly companyName = SITE_CONFIG.companyName;

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Política de Privacidad',
      description: 'Documento base de política de privacidad de SP SoftTechnology. Pendiente de validación jurídica definitiva.',
      path: '/politica-de-privacidad',
      schemaType: 'website'
    });
  }
}

