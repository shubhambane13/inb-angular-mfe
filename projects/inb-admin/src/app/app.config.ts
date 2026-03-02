import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpInterceptor } from 'inb-common-lib';
import { MatNativeDateModule } from '@angular/material/core';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(MatNativeDateModule),
    provideRouter(routes),
    provideHttpClient(withInterceptors([HttpInterceptor]))
  ]
};
