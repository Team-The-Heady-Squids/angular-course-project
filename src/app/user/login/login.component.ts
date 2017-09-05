import { UserValidator } from './../user-validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { AuthService } from './../../_core/auth-service/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: FormControl;
  passHash: FormControl;

  usernameField;
  passHashField;

  mouseover = false;

  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastsManager) { }

  ngOnInit() {
    this.usernameField = UserValidator.usernameField;
    this.passHashField = UserValidator.passHashField;
    this.username = new FormControl('', UserValidator.usernameValidators);
    this.passHash = new FormControl('', UserValidator.passHashValidators);

    this.loginForm = new FormGroup({
      username: this.username,
      passHash: this.passHash
    });
  }

  login(user) {
    this.authService.login(user)
      .subscribe((msg) => {
        this.toastr.success(msg);
        this.router.navigateByUrl(`/home`);
      });
  }
}
