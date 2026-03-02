import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { ProtectedLayout } from './app';

export const routes: Routes = [
  {
    path: '',
    component: ProtectedLayout,
    children: [
      {
        path: 'inb-admin',
        loadComponent: () =>
          loadRemoteModule('inb-admin', './Component').then((c) => c.AdminPortal),
      },
      {
        path: 'inb-customer',
        loadComponent: () =>
          loadRemoteModule('inb-customer', './Component').then((c) => c.CustomerPortal),
      },
    ],
  },
];
