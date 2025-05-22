import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];

}

@Injectable({ providedIn: 'root'})//decorador que transforma la clase en un servicio
export class DragonballService {//cuando copias un bloque, ctrl+. para agregar los missing imports

  characters= signal<Character[]>(loadFromLocalStorage());//con esta interface le digo a angular que esta es una singla que maneja un array de personajes con un señar generico

  saveToLocalStorage= effect( () => {//los efectos saben las señales estan internas y cuales son sus dependencias
  localStorage.setItem('characters', JSON.stringify(this.characters()));//solo se graba en el local storage
  });//usar efectos solo tienen una funcion y deben ser cortas, sin leer o cambiar el local storage
  addCharacter(character: Character) {
    this.characters.update((list)=> [...list, character]);
  }
}


