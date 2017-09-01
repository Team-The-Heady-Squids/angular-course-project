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
  passHash;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(user) {
    this.authService.login(user)
      .then(() => {
        this.router.navigateByUrl('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
