import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './terms.html',
  styleUrl: './legal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly companyName = SITE_CONFIG.companyName;

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Términos y Condiciones',
      description: 'Términos base del sitio corporativo de SP SoftTechnology. Pendiente de validación jurídica definitiva.',
      path: '/terminos',
      schemaType: 'website'
    });
  }
}

