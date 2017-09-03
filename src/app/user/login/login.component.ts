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
  username;
  passHash;

  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastsManager) { }

  ngOnInit() {
  }

  login(user) {
    this.authService.login(user)
      .subscribe((msg) => {
        this.toastr.success(msg);
        this.router.navigateByUrl(`/home`);
      });
  }
}
