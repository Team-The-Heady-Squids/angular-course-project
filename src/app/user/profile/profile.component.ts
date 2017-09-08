import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

import { ToastsManager } from 'ng2-toastr';

import { AuthService } from './../../_core/auth-service/auth.service';
import { UsersService } from './../../_core/users-service/users.service';

import { UserValidator } from '../user-validator';

import { IUserProfile } from './../../model/userProfile.model';
import { IChangePassData } from './../../model/userChangePass.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: IUserProfile;
  currentUser: string;

  changePassForm: FormGroup;
  oldPass: FormControl;
  newPass: FormControl;
  newPassRepeat: FormControl;

  controlsCollapsed = true;
  constructor(private userService: UsersService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastsManager,
    private location: Location) { }

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

  changePassword(data: IChangePassData): void {
    this.userService.changePass(data)
      .subscribe((response) => {
        this.toastr.success(response.msg);
      },
      (error) => {
        this.toastr.error(error.msg);
      });
  }

  back(): void {
    this.location.back();
  }
}
