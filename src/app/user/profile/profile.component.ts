import { AuthService } from './../../_core/auth-service/auth.service';
import { ToastsManager } from 'ng2-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../_core/users-service/users.service';
import { Component, OnInit } from '@angular/core';

import { UserValidator } from '../user-validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;
  currentUser;

  changePassForm: FormGroup;
  oldPass: FormControl;
  newPass: FormControl;
  newPassRepeat: FormControl;

  controlsCollapsed = true;
  constructor(private userService: UsersService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastsManager) { }

  ngOnInit() {
    this.profile = this.route.snapshot.data['profile'];
    this.currentUser = this.authService.current();

    this.oldPass = new FormControl('', UserValidator.passHashValidators);
    this.newPass = new FormControl('', UserValidator.passHashValidators);
    this.newPassRepeat = new FormControl('', UserValidator.passHashValidators);

    this.changePassForm = new FormGroup({
      oldPassHash: this.oldPass,
      newPassHash: this.newPass,
      newPassHashRepeat: this.newPassRepeat
    });
  }

  changePassword(data) {
    this.userService.changePass(data)
      .subscribe((response) => {
        this.toastr.success(response.msg);
      },
      (error) => {
        this.toastr.error(error.msg);
      });
  }
}
