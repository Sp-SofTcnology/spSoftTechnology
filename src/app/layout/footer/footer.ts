import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly currentYear = 2026;
  readonly companyName = SITE_CONFIG.companyName;
  readonly navItems = SITE_CONFIG.navItems;
  readonly whatsappUrl = SITE_CONFIG.defaultWhatsappUrl;
  readonly whatsappNumber = SITE_CONFIG.whatsappNumber;
}

