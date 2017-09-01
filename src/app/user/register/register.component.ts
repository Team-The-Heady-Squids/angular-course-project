import { Router } from '@angular/router';
import { AuthService } from './../../_core/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username;
  passHash;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(data) {
    if (data.username === undefined || data.passHash === undefined) {
      throw new Error('Username or Password must not be empty');
    }
    if (3 > data.username || data.username > 20) {
      throw new Error('Username must be between 3 and 20 symbols long');
    }
    if (6 > data.passHash || data.passHash > 20) {
      throw new Error('Password must be between 6 and 20 symbols long');
    }

    this.auth.register(data)
      .then(() => {
        this.router.navigate(['../users/login']);
      });
    // console.log(this.username, this.password);
  }
}
