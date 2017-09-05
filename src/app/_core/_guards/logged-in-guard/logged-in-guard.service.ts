import { ToastsManager } from 'ng2-toastr';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../auth-service/index';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthService,
      private router: Router,
      private toastr: ToastsManager) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.current();

    if (!currentUser) {
      this.toastr.error('You are not logged in!');
    }

    return !!currentUser;
  }
}
