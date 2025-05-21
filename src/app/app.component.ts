import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
//decorador @Component que transforma la clase en un componente
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],//el routerOutlet es la forma en la que muestra las rutas
  templateUrl: './app.component.html',

})
export class AppComponent {// en angular los componentes, servicios etc.. no son mas que simples clases
  title = 'Irving Santos';
}
