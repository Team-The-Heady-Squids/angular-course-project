import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { UsersService } from './../_core/users-service/users.service';

import { IUserProfile } from './../model/userProfile.model';

@Injectable()
export class UserProfileResolver implements Resolve<any> {

  constructor(private userService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUserProfile> {
    const username = route.params['username'];
    if (username) {
      return this.userService.getProfile(username);
    }
    return this.userService.ownProfile();
  }
}
