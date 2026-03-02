import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => loadRemoteModule('inb-auth', './Routes').then(c => c.routes),
  },
  {
    path: 'inb-protected',
    loadChildren: () => loadRemoteModule('inb-protected', './Routes').then(m => m.routes),
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
