import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  constructor() {}

  ngOnInit(): void {}
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
