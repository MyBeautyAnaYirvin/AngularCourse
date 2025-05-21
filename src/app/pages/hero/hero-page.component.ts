import { UpperCasePipe } from "@angular/common";
import { Component, signal, computed } from "@angular/core";

@Component({
  selector: 'app-hero-page',//es el nombre de la etiqueta HTML que representa al componente HTML
  templateUrl: './hero-page.component.html',// es la ruta del archivo HTML que representa al componente
  imports: [UpperCasePipe]
})

export class HeroPageComponent {//atributos de la clase
name = signal('Ironman');//esta funcion parte de los signal de angular que permite crear una variable reactiva
age = signal(45);

  heroDescription =  computed(() =>{
    const description = `${this.name()} - ${this.age()}`; // () es para invocar la funcion, en este caso el signal
    return description;
  })

  capitalizeName = computed(() => {
    return this.name().toUpperCase();
  })
getHeroDescription() {
  return `${this.name()} - ${this.age()}`//mostrar el nombre y la edad del heroe concatenados por interpolacion
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(25);
  }
  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }
  changeAge(value: number) {
    this.age.set(this.age() + value);
  }
}
