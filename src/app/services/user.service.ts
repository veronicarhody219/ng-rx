import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _refreshrequired = new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }
  //https: //veronicabackend.onrender.com/api/auth
  apiUrl = 'https://veronicabackend.onrender.com/api/user';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }
  getUserById(id: string) {
    return this.http.get(this.apiUrl + '/' + id);
  }
  deleteUser(id: string) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
  saveUser(inputdata: any) {
    return this.http.post(this.apiUrl, inputdata).pipe(
      tap(() => {
        this.RequiredRefresh.next();
      })
    );
  }
  editUser(id: string, inputdata: any) {
    return this.http.put(this.apiUrl + '/' + id, inputdata).pipe(
      tap(() => {
        this.RequiredRefresh.next();
      })
    );
  }
}
