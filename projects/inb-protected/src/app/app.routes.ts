import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      {
        path: 'inb-admin',
        loadComponent: () =>
          loadRemoteModule('inb-admin', './Component').then((c) => c.App),
      },
      {
        path: 'inb-customer',
        loadComponent: () =>
          loadRemoteModule('inb-customer', './Component').then((c) => c.App),
      },
    ],
  },
];
