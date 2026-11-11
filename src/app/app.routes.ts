import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'electronica',
    loadComponent: () => import('./pages/electronica/electronica.page').then(m => m.ElectronicaPage),
  },
  {
    path: 'programacion',
    loadComponent: () => import('./pages/programacion/programacion.page').then(m => m.ProgramacionPage),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.page').then(m => m.NotFoundPage),
  },
];