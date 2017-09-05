// import { IUserProfile } from './../../model/userProfile.model';
import { Observable } from 'rxjs/Observable';
import { BaseHeaders } from './../base-headers';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

interface ProfileData {
  username: string;
  joined: string;
}

@Injectable()
export class UsersService {
  private connectionURL = 'http://localhost:8080/users';
  constructor(private http: Http) { }

  ownProfile() {
    return this.http.get(this.connectionURL, {
        headers: BaseHeaders.get(),
      })
      .map((response) => response.json() as ProfileData)
      .catch((err) => {
        return Observable.throw(err.json());
      });
  }
}
