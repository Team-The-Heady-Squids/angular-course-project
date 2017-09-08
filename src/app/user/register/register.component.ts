import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ToastsManager } from 'ng2-toastr';

import { AuthService } from './../../_core/auth-service/auth.service';
import { UserValidator } from './../user-validator';
import { IRegisterData } from '../../model/userData.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  username: FormControl;
  passHash: FormControl;
  passHashRepeat: FormControl;

  usernameField;
  passHashField;

  mouseover = false;

  constructor(private auth: AuthService,
    private router: Router,
    private toastr: ToastsManager) { }

  ngOnInit(): void {
    this.usernameField = UserValidator.usernameField;
    this.passHashField = UserValidator.passHashField;

    this.username = new FormControl('', UserValidator.usernameValidators);
    this.passHash = new FormControl('', UserValidator.passHashValidators);
    this.passHashRepeat = new FormControl('', UserValidator.passHashValidators);

    this.registerForm = new FormGroup({
      username: this.username,
      passHash: this.passHash,
      passHashRepeat: this.passHashRepeat
    });
  }

  register(data: IRegisterData) {
    if (data.passHash !== data.passHashRepeat) {
      return this.toastr.error('Passwords must match!');
    }

    this.auth.register(data)
      .subscribe((msg) => {
        this.toastr.success(msg);
        this.router.navigateByUrl('/home');
      },
      (error) => {
        const err = error.json().msg;
        this.toastr.error(err);
      });
  }
}
