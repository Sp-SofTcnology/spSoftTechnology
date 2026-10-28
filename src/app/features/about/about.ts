import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly companyName = SITE_CONFIG.companyName;
  readonly whatsappUrl = SITE_CONFIG.defaultWhatsappUrl;

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Sobre nosotros',
      description: 'Conoce el propósito y visión de SP SoftTechnology: tecnología útil, accesible y diseñada para resolver problemas reales en negocios independientes.',
      path: '/nosotros',
      schemaType: 'website'
    });
  }
}

