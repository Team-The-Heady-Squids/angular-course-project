// import { UsersService } from './../users-service/index';
// import { LoggerService } from './../logger-service/index';
import { Injectable } from '@angular/core';

import { BaseHeaders } from './../base-headers';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private connectionURL = 'http://localhost:8080/users';

  constructor(
    private http: Http) { }

  writeToLocalStorage(data) {
    localStorage.setItem('username', data['username']);
    localStorage.setItem('token', data['authKey']);
    // window.location.reload();

    return Observable.create(); // returns new Observable
  }

  register(user): Observable<any> {
    return this.http.post(this.connectionURL, user)
      .map((response) => {
        response = response.json();

        const match = response['user'];
        const msg = response['msg'];

        this.writeToLocalStorage(match);
        return msg;
      });
    // .catch((error) =>
    //   console.error('Error has ocurred', error));
  }

  login(user) {
    return this.http.put(`${this.connectionURL}/auth`, user)
      .map((response) => {
        response = response.json();

        const match = response['user'];
        const msg = response['msg'];

        this.writeToLocalStorage(match);
        return msg;
      });
  }

  logout() {
    localStorage.clear();
  }

  current() {
    return localStorage.getItem('username');
  }
}
