import { AlertService } from './../../alert-service/alert.service';
import { AuthService } from './../../auth-service/auth.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class NotLoggedInGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router,
    private alertService: AlertService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.current();

    if (currentUser) {
      this.alertService.msg('You are already logged in!');
      this.router.navigateByUrl('/home');
    }

    return !currentUser;
  }
}
