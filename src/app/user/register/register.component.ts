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

  password;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.username === undefined || this.password === undefined) {
      throw new Error('Username or Password must not be empty');
    }
    if (3 > this.username || this.username > 20) {
      throw new Error('Username must be between 3 and 20 symbols long');
    }
    if (6 > this.password || this.password > 20) {
      throw new Error('Password must be between 6 and 20 symbols long');
    }

    const newUser = {
      username: this.username,
      passHash: this.password
    };

    this.auth.register(newUser)
      .then(() => {
        this.router.navigate(['../users/login']);
      });
    // console.log(this.username, this.password);
  }
}
