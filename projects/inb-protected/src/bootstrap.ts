import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProtectedLayout } from './app/app';

bootstrapApplication(ProtectedLayout, appConfig)
  .catch((err) => console.error(err));
