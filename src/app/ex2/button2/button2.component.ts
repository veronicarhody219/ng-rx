import { Component, OnInit } from '@angular/core';
import { IncdecresService } from 'src/app/services/ex2/incdecres.service';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.scss'],
})
export class Button2Component implements OnInit {
  constructor(private incdecresService: IncdecresService) {}

  ngOnInit(): void {}
  onIncrement() {
    this.incdecresService.onIncrement();
  }
  onDecrement() {
    this.incdecresService.onDecrement();
  }
  onReset() {
    this.incdecresService.onReset();
  }
}
