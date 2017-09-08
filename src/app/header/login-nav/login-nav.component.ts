import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

import { ToastsManager } from 'ng2-toastr';

import { AuthService } from './../../_core/auth-service/auth.service';

@Component({
  selector: 'app-login-nav',
  templateUrl: './login-nav.component.html',
  styleUrls: ['./login-nav.component.css']
})
export class LoginNavComponent {
  @Input()
  user: string;

  constructor(private auth: AuthService,
    private router: Router,
    private toastr: ToastsManager) { }

  logout(): void {
    this.toastr.success('Successfuly logged out!');
    this.auth.logout();
    this.router.navigateByUrl('/users/login');
  }
}
