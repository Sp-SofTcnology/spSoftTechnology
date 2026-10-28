import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.HomeComponent),
    title: 'SP SoftTechnology | Soluciones de software para negocios reales'
  },
  {
    path: 'flow',
    loadComponent: () => import('./features/flow/flow').then(m => m.FlowComponent),
    title: 'Flow | Plataforma de reservas y gestión para tu negocio'
  },
  {
    path: 'precios',
    loadComponent: () => import('./features/pricing/pricing').then(m => m.PricingComponent),
    title: 'Planes y asesoría comercial | SP SoftTechnology'
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/about/about').then(m => m.AboutComponent),
    title: 'Sobre nosotros | SP SoftTechnology'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent),
    title: 'Contacto comercial | SP SoftTechnology'
  },
  {
    path: 'politica-de-privacidad',
    loadComponent: () => import('./features/legal/privacy').then(m => m.PrivacyComponent),
    title: 'Política de Privacidad | SP SoftTechnology'
  },
  {
    path: 'terminos',
    loadComponent: () => import('./features/legal/terms').then(m => m.TermsComponent),
    title: 'Términos y Condiciones | SP SoftTechnology'
  },
  {
    path: '404',
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFoundComponent),
    title: 'Página no encontrada (404) | SP SoftTechnology'
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFoundComponent),
    title: 'Página no encontrada (404) | SP SoftTechnology'
  }
];
