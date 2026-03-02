import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppConfigService, HttpInterceptor } from 'inb-common-lib';
import { MatNativeDateModule } from '@angular/material/core';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

// Factory function to trigger the load
export function initConfig(appConfig: AppConfigService) {
  return () => appConfig.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(MatNativeDateModule),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withInterceptors([HttpInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfigService],
      multi: true
    }
  ]
};
