import { Component, ChangeDetectionStrategy, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly navItems = SITE_CONFIG.navItems;
  readonly companyName = SITE_CONFIG.companyName;
  readonly whatsappUrl = SITE_CONFIG.defaultWhatsappUrl;
  
  readonly isMenuOpen = signal<boolean>(false);

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  @HostListener('keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen()) {
      this.closeMenu();
    }
  }
}

