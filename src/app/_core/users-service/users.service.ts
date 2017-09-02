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
  private connectionURL = 'http://localhost:8080/users';
  constructor(private http: Http, private baseHeaders: BaseHeaders) { }

  ownProfile() {
    return this.http.get(this.connectionURL, {
      headers: this.baseHeaders.get(),
    })
      .toPromise();
  }
}
