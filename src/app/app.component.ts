import { AuthService } from './_core/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.currentUser = this.auth.current();
  }
}
