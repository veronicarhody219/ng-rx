import { Component, OnInit } from '@angular/core';
import { IncdecresService } from 'src/app/services/ex2/incdecres.service';

@Component({
  selector: 'app-output2',
  templateUrl: './output2.component.html',
  styleUrls: ['./output2.component.scss'],
})
export class Output2Component implements OnInit {
  counter: number = 0;
  constructor(private incdecresService: IncdecresService) {}

  ngOnInit(): void {}
  displayOutput() {
   return this.counter = this.incdecresService.counter;
  }
}
