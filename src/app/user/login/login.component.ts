import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../_core/auth-service/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const user = {
      username: this.username,
      passHash: this.password
    };
    this.auth.login(user)
      .then(() => {
        this.router.navigate(['../home']);
      });
  }
}
