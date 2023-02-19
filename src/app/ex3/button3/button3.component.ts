import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-button3',
  templateUrl: './button3.component.html',
  styleUrls: ['./button3.component.scss'],
})
export class Button3Component implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {}
  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }
}
