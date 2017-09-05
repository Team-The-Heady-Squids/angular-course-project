import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { AuthService } from './../../_core/auth-service/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-nav',
  templateUrl: './login-nav.component.html',
  styleUrls: ['./login-nav.component.css']
})
export class LoginNavComponent implements OnInit {
  @Input()
  user;

  constructor(private auth: AuthService,
    private router: Router,
    private toastr: ToastsManager) { }

  ngOnInit() {
  }

  logout() {
    this.toastr.success('Successfuly logged out!');
    this.auth.logout();
    this.router.navigateByUrl('/users/login');
  }
}
