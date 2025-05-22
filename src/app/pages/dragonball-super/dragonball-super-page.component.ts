import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-super-page.component.html',
})

export class DragonballSuperPageComponent  {

name = signal('');
power = signal(0);
//con esta interface le digo a angular que esta es una singla que maneja un array de personajes con un señar generico
  characters= signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
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

