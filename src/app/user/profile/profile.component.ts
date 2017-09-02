import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../_core/users-service/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;
  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.profile = this.route.snapshot.data['profile'];
  }

}
