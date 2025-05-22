import { DragonballService } from './../../services/dragonball.service';
import { CharacterListComponent } from './../../components/dragonball/character-list/character-list.component';
import { Component, inject, signal } from '@angular/core';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})

export class DragonballSuperPageComponent  {//importar la instancia de la clase del servicio

public dragonballService = inject(DragonballService);//forma moderna de inyectar el servicio

}


// constructor(
//   public dragonballService: DragonballService //forma tradicional de inyectar el servicio
// ) { }

//con esta interface le digo a angular que esta es una singla que maneja un array de personajes con un señar generico
  // characters= signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9000 },
  //   { id: 2, name: 'Vegeta', power: 8500 },
  // ]);
  // addCharacter(character: Character) {
  //   this.characters.update((list)=> [...list, character]);
  // }
