import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './ex1/counter/counter.component';
import { Counter2Component } from './ex2/counter2/counter2.component';

const routes: Routes = [
  { path: '', component: CounterComponent },
  { path: '/ex2', component: Counter2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
