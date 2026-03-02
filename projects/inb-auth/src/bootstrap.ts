import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AuthLayout } from './app/app';

bootstrapApplication(AuthLayout, appConfig)
  .catch((err) => console.error(err));
