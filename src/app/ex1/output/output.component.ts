import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  // counter: number = 0;
  @Input() counter: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
