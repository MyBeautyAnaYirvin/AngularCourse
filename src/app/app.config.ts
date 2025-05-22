//este archivo es el que se encarga de la configuracion de la aplicacion
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  {
  provide: LocationStrategy,
  useClass: HashLocationStrategy,//hash especial para el router de angular que permite navegar por la aplicacion pero desde un tipo "root"
  },
  ],
};
