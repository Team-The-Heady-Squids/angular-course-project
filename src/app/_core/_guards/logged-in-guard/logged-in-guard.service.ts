import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ToastsManager } from 'ng2-toastr';

import { AuthService } from '../../auth-service/index';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthService,
      private toastr: ToastsManager) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser: string = this.authService.current();

    if (!currentUser) {
      this.toastr.error('You are not logged in!');
    }

    return !!currentUser;
  }
}
