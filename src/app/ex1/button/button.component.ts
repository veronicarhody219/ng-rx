import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  @Output() incrementEvent = new EventEmitter();
  @Output() decrementEvent = new EventEmitter();
  @Output() resetEvent = new EventEmitter();
  ngOnInit(): void {}
  onIncrement() {
    this.incrementEvent.emit();
  }
  onDecrement() {
    this.decrementEvent.emit();
  }
  onReset() {
    this.resetEvent.emit();
  }
}
