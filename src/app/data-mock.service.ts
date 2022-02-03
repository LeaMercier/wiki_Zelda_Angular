import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IData } from './IData';
import { DATA } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {

  constructor() {}

  getAll() {
    return of(DATA);
  }

  getMonsters(){
    return of(DATA.filter(this.checkmonster));
  }
  
  checkmonster(data : IData) {
    return data.category == "monster";
  }

  getCreatures(){
    return of(DATA.filter(this.checkCreatures));
  }

  getCreature(id : number){
    for (let data in DATA){
      if(DATA[data].id == id){
        return of(DATA[data]);
      }
    }
    return null;
  }

  checkCreatures(data : IData) {
    return data.category == "creatureFood" || data.category == 'creatureNoFood';
  }
  
}
