import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import type { Character } from '../../interfaces/character.interface';
@Component({
  templateUrl: './dragonball-page.component.html',
  imports: [CharacterListComponent],
})

export class DragonballPageComponent  {

name = signal('');
power = signal(0);
//con esta interface le digo a angular que esta es una singla que maneja un array de personajes con un señar generico
  characters= signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },

  ]);
  addCharacter() {
    if(!this.name() || !this.power() || this.power() < 0){
      return;
  }

  const newCharacter: Character = {
    id: this.characters().length + 1,
    name: this.name(),
    power: this.power(),
  };
  this.characters.update((list)=> [...list, newCharacter]);
  this.resetFields();
  }

  // powerClasses= computed(() => {
  //   return{
  //     'text-danger': true,
  //   }
  // })
resetFields(){
  this.name.set('');
  this.power.set(0);
  }
}

