import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CounterComponent } from './ex1/counter/counter.component';
import { Counter2Component } from './ex2/counter2/counter2.component';
import { Counter3Component } from './ex3/counter3/counter3.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ex1', component: CounterComponent },
  { path: 'ex2', component: Counter2Component },
  { path: 'ex3', component: Counter3Component },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
