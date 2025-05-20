import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//decorador @Component que transforma la clase en un componente
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],//el routerOutlet es la forma en la que muestra las rutas
  templateUrl: './app.component.html',

})
export class AppComponent {// en angular los componentes, servicios etc.. no son mas que simples clases
  title = 'Irving Santos';
}
