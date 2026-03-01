import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inb-auth',
    loadComponent: () => loadRemoteModule('inb-auth', './Component').then(c => c.App),
  },
  {
    path: 'inb-protected',
    loadChildren: () => loadRemoteModule('inb-protected', './Routes').then(m => m.routes),
  },
];
