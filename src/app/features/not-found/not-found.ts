import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly companyName = SITE_CONFIG.companyName;

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Página no encontrada (404)',
      description: 'La página que buscas no existe o ha sido movida. Regresa al inicio de SP SoftTechnology.',
      path: '/404',
      schemaType: 'website'
    });
  }
}

