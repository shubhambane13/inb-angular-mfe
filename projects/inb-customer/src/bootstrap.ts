import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { CustomerPortal } from './app/app';

bootstrapApplication(CustomerPortal, appConfig)
  .catch((err) => console.error(err));
