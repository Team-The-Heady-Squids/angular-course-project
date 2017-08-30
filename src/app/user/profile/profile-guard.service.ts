import { AuthService } from './../../_core/auth-service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ProfileGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.auth.current();

    if (!currentUser) {
      this.router.navigateByUrl('/home');
    }

    return !!currentUser;
  }
}
