import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MainApp } from './app/app';

bootstrapApplication(MainApp, appConfig)
  .catch((err) => console.error(err));
