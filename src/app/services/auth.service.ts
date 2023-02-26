import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // https://veronicabackend.onrender.com/api/auth
  apiUrlLogin = 'https://veronicabackend.onrender.com/api/auth/login';
  apiUrlRegister = 'hhttps://veronicabackend.onrender.com/api/auth/signup';
  constructor(private http: HttpClient, private router: Router) {}
  login(userCred: any) {
    return this.http.post(this.apiUrlLogin, userCred);
  }
  register(userCred: any) {
    return this.http
      .post(this.apiUrlRegister, userCred)
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
