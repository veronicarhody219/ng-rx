import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './ex1/counter/counter.component';

import { OutputComponent } from './ex1/output/output.component';
import { ButtonComponent } from './ex1/button/button.component';
import { Button2Component } from './ex2/button2/button2.component';
import { Output2Component } from './ex2/output2/output2.component';
import { Counter2Component } from './ex2/counter2/counter2.component';
import { Output3Component } from './ex3/output3/output3.component';
import { Button3Component } from './ex3/button3/button3.component';
import { Counter3Component } from './ex3/counter3/counter3.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ex3/state/counter.reducer';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { UsersComponent } from './components/users/users.component';
import {  HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OutputComponent,
    ButtonComponent,
    Button2Component,
    Output2Component,
    Counter2Component,
    Output3Component,
    Button3Component,
    Counter3Component,
    ProjectsComponent,
    ProjectComponent,
    DialogComponent,
    UsersComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    [StoreModule.forRoot({ counter: counterReducer }), BrowserAnimationsModule],
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
