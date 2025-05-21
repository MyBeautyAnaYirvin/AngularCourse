import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';// importamos el componente que queremos mostrar
import { HeroPageComponent } from './pages/hero/hero-page.component';// importamos el componente que queremos mostrar
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';

export const routes: Routes = [//SIEMPRE LAS RUTAS VAN EN ORDEN, YA QUE ANGULAR LAS MANEJA EN ORDEN

  {
    path: '',// la ruta esta asi porque es la ruta por defecto
    component: CounterPageComponent,// el componente que queremos mostrar
  },
  {
    path: 'hero',
    component: HeroPageComponent,// el componente que queremos mostrar
  },
    {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: '**',// la ruta por defecto
    redirectTo: '',// redirige a la ruta por defecto
  },
  // {
  //   path: 'dragonball',
  //   component: DragonballPageComponent,
  // }

];
