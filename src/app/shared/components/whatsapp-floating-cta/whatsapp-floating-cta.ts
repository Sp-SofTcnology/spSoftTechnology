import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SITE_CONFIG } from '../../../core/config/site.config';

@Component({
  selector: 'app-whatsapp-floating-cta',
  standalone: true,
  templateUrl: './whatsapp-floating-cta.html',
  styleUrl: './whatsapp-floating-cta.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsAppFloatingCtaComponent {
  readonly whatsappUrl = SITE_CONFIG.defaultWhatsappUrl;
}

