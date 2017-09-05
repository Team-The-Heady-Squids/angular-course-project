import { ToastsManager } from 'ng2-toastr';
import { AuthService } from './../../auth-service/auth.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class NotLoggedInGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastsManager) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.current();

    if (currentUser) {
      this.toastr.error('You are already logged in!');
    }

    return !currentUser;
  }
}
