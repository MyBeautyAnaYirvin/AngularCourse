import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';// importamos el componente que queremos mostrar
export const routes: Routes = [

  {
    path: '',// la ruta esta asi porque es la ruta por defecto
    component: CounterPageComponent,// el componente que queremos mostrar
  }

];
