import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IncdecresService {
  counter: number = 0;
  constructor() {}
  onIncrement() {
    return (this.counter += 1);
  }
  onDecrement() {
    return (this.counter -= 1);
  }
  onReset() {
    return (this.counter = 0);
  }
}
