import { AlertService } from './../../alert-service/alert.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../auth-service/index';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthService,
      private router: Router,
      private alertService: AlertService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.current();

    if (!currentUser) {
      this.alertService.msg('You are not logged in!');
      this.router.navigateByUrl('/home');
    }

    return !!currentUser;
  }
}
