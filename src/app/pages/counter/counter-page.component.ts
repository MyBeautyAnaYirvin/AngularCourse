import { Component, signal } from "@angular/core";//
//los signals funcionan como una forma de cambio automatico de una parte de la aplicacion como un laser de forma automatica en vez de tener que recargar la pagina entera

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styles: [`
    button {
      padding: 10px;
      background-color: #3b82f6;
      color: white;
      border: none;
      border-radius: 5px;
    }
  `],
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);



  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update( current => current + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
