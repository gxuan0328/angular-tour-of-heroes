import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'OAO' },
      { id: 12, name: 'QAQ' },
      { id: 13, name: 'TAT' },
      { id: 14, name: 'RAR' },
      { id: 15, name: 'SOS' },
      { id: 16, name: 'YOY' },
      { id: 17, name: 'COC' },
      { id: 18, name: 'LOL' },
      { id: 19, name: 'WOW' },
      { id: 20, name: 'NAN' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+1 : 11;
  }

  constructor() { }
}
