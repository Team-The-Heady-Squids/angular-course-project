// import { UsersService } from './../users-service/index';
// import { LoggerService } from './../logger-service/index';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { BaseHeaders } from './../base-headers';

import { ILoginData, IRegisterData } from '../../model/userData.model';
import { PORT } from '../../../../api/constants/index.js';

@Injectable()
export class AuthService {
  private connectionURL = `http://localhost:${PORT}/users`; // http://localhost:8080/users

  constructor(
    private http: Http) { }

  writeToLocalStorage(data) {
    localStorage.setItem('username', data['username']);
    localStorage.setItem('token', data['authKey']);

    return Observable.create(); // returns new Observable
  }

  register(user: IRegisterData): Observable<string> {
    return this.http.post(this.connectionURL, user)
      .map((response) => {
        response = response.json();

        const match = response['user'];
        const msg = response['msg'];

        this.writeToLocalStorage(match);
        return msg;
      });
  }

  login(user: ILoginData): Observable<string> {
    return this.http.put(`${this.connectionURL}/auth`, user)
      .map((response) => {
        response = response.json();

        const match = response['user'];
        const msg = response['msg'];

        this.writeToLocalStorage(match);
        return msg;
      });
  }

  logout(): void {
    localStorage.clear();
  }

  current(): string {
    return localStorage.getItem('username');
  }
}
