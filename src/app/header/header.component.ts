import { ToastsManager } from 'ng2-toastr';
import { AuthService } from './../_core/auth-service/auth.service';
import { Component, OnInit, ViewContainerRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {

  currentUser;

  constructor(private auth: AuthService,
  ) { }

  ngOnInit() {
    this.currentUser = this.auth.current();
  }

  ngAfterViewChecked() {
    this.currentUser = this.auth.current();
  }
}

