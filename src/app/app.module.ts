import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './ex1/counter/counter.component';

import { OutputComponent } from './ex1/output/output.component';
import { ButtonComponent } from './ex1/button/button.component';
import { Button2Component } from './ex2/button2/button2.component';
import { Output2Component } from './ex2/output2/output2.component';
import { Counter2Component } from './ex2/counter2/counter2.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OutputComponent,
    ButtonComponent,
    Button2Component,
    Output2Component,
    Counter2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
