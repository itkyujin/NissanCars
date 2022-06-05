import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from './car';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      { id: 1, name: 'Versa' },
      { id: 2, name: 'Sentra' },
      { id: 3, name: 'Altima' },
      { id: 4, name: 'Maxima' },
      { id: 5, name: 'KICKS' },
      { id: 6, name: 'Qashqai' },
      { id: 7, name: 'Rogue' },
      { id: 8, name: 'Murano' },
      { id: 9, name: 'Pathfinder' }
    ];
    return {cars};
  }

  // Overrides the genId method to ensure that a car always has an id.
  // If the cars array is empty,
  // the method below returns the initial number (11).
  // if the cars array is not empty, the method below returns the highest
  // car id + 1.
  genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 11;
  }
}