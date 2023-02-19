import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-output3',
  templateUrl: './output3.component.html',
  styleUrls: ['./output3.component.scss'],
})
export class Output3Component implements OnInit {
  counter$: Observable<{ counter: number }>;
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
    
  }
}
