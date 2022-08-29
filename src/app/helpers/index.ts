import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Helpers {
  constructor() {}

  getRandom(min: number = 0, max: number = 1) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
