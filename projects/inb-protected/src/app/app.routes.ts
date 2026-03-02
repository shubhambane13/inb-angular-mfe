import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { ProtectedLayout } from './app';

export const routes: Routes = [
  {
    path: '',
    component: ProtectedLayout,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          loadRemoteModule('inb-admin', './Routes').then((c) => c.routes),
      },
      {
        path: 'customer',
        loadChildren: () =>
          loadRemoteModule('inb-customer', './Routes').then((c) => c.routes),
      },
    ],
  },
];
