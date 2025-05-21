import { Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-page.html',
  imports: [NgClass],
})

export class DragonballPageComponent  {

name = signal('Gohan');
power = signal('100');
//con esta interface le digo a angular que esta es una singla que maneja un array de personajes con un señar generico
  characters= signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 8000 },
    { id: 4, name: 'Piccolo', power: 7000 },
    { id: 5, name: 'Frieza', power: 9500 },
    { id: 5, name: 'Yamcha', power: 500 },
  ]);
  // powerClasses= computed(() => {
  //   return{
  //     'text-danger': true,
  //   }
  // })
}
