import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { BaseHeaders } from './../base-headers';
import { IUserProfile } from './../../model/userProfile.model';
import { IChangePassData } from './../../model/userChangePass.model';

@Injectable()
export class UsersService {
  private connectionURL = 'http://localhost:8080/users';
  constructor(private http: Http) { }

  ownProfile(): Observable<IUserProfile> {
    return this.http.get(this.connectionURL, {
        headers: BaseHeaders.get(),
      })
      .map((response) => response.json() as IUserProfile)
      .catch((err) => {
        return Observable.throw(err.json());
      });
  }

  getProfile(username: string): Observable<IUserProfile> {
    return this.http.get(`${this.connectionURL}/${username}`, {
        headers: BaseHeaders.get(),
      })
      .map((response) => response.json() as IUserProfile)
      .catch((err) => {
        return Observable.throw(err.json());
      });
  }

  changePass(passData: IChangePassData): Observable<any> {
    return this.http.put(this.connectionURL, passData, {
      headers: BaseHeaders.get(),
    })
      .map((response) => response.json())
      .catch((err) => {
        return Observable.throw(err.json());
      });
  }
}
