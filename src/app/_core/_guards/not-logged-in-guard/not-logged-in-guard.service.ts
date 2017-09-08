import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { ToastsManager } from 'ng2-toastr';

import { AuthService } from './../../auth-service/auth.service';

@Injectable()
export class NotLoggedInGuard implements CanActivate {

  constructor(private authService: AuthService,
    private toastr: ToastsManager) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser: string = this.authService.current();

    if (currentUser) {
      this.toastr.error('You are already logged in!');
    }

    return !currentUser;
  }
}
