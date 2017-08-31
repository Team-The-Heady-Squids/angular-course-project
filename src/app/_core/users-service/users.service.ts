import { BaseHeaders } from './../base-headers';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

interface LoginData {
  username: string;
  authKey: string;
}

@Injectable()
export class UsersService {

  constructor(private http: Http, private baseHeaders: BaseHeaders) { }

  login(user) {
    return this.http.put('http://localhost:8080/users/auth', user)
      .toPromise();
  }

  register(user) {
    return this.http.post('http://localhost:8080/users', user)
      .toPromise();
  }

  ownProfile() {
    return this.http.get('http://localhost:8080/users', {
        headers: this.baseHeaders.get(),
      })
      .toPromise();
  }
}
