import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AdminPortal } from './app/app';

bootstrapApplication(AdminPortal, appConfig)
  .catch((err) => console.error(err));
