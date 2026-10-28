import { Component, ChangeDetectionStrategy, OnInit, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly companyName = SITE_CONFIG.companyName;
  readonly whatsappNumber = SITE_CONFIG.whatsappNumber;
  readonly defaultWhatsappUrl = SITE_CONFIG.defaultWhatsappUrl;

  readonly businessTypes = [
    { id: 'barberia', label: 'Barbería' },
    { id: 'peluqueria', label: 'Peluquería o salón de belleza' },
    { id: 'spa', label: 'Spa o centro de bienestar' },
    { id: 'tatuajes', label: 'Estudio de tatuajes' },
    { id: 'otro', label: 'Otro negocio de cuidado personal' }
  ];

  selectedBusinessType = signal<string>('barberia');
  businessName = signal<string>('');

  readonly dynamicWhatsappUrl = computed(() => {
    const typeLabel = this.businessTypes.find(t => t.id === this.selectedBusinessType())?.label || 'mi negocio';
    const name = this.businessName().trim();
    
    let msg = `Hola, quiero conocer Flow para mi negocio (${typeLabel}).`;
    if (name) {
      msg = `Hola, mi negocio es "${name}" (${typeLabel}) y deseo conocer Flow para organizar nuestras reservas.`;
    }
    return SITE_CONFIG.createWhatsappUrl(msg);
  });

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Contacto comercial',
      description: 'Ponte en contacto con SP SoftTechnology vía WhatsApp al 3016743186. Conoce Flow y recibe orientación para tu negocio.',
      path: '/contacto',
      schemaType: 'website'
    });
  }

  onTypeChange(event: Event): void {
    const val = (event.target as HTMLSelectElement).value;
    this.selectedBusinessType.set(val);
  }

  onNameChange(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.businessName.set(val);
  }
}

