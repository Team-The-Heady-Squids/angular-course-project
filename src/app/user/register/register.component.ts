import { ToastsManager } from 'ng2-toastr';
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
  passHashRepeat;

  constructor(private auth: AuthService,
    private router: Router,
    private toastr: ToastsManager) { }

  ngOnInit() {
  }

  register(data) {
    if (!data.username || !data.passHash || !data.passHashRepeat) {
      return this.toastr.error('Username or Password must not be empty');
    }
    if (data.passHash !== data.passHashRepeat) {
      return this.toastr.error('Passwords must match!');
    }
    if (3 >= data.username.length && data.username.length > 20) {
      return this.toastr.error('Username must be between 3 and 20 symbols long');
    }
    if (6 > data.passHash.length && data.passHash.length > 20) {
      return this.toastr.error('Password must be between 6 and 20 symbols long');
    }

    this.auth.register(data)
      .subscribe((msg) => {
        this.toastr.success(msg);
        this.router.navigateByUrl('/home');
      });
    // console.log(this.username, this.password);
  }
}
