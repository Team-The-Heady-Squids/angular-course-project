import { ToastsManager } from 'ng2-toastr';
import { AuthService } from './_core/auth-service/auth.service';
import { Component, OnInit, ViewContainerRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  currentUser;

  constructor(private auth: AuthService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(this.vcr);
    }

  ngOnInit() {
    this.currentUser = this.auth.current();
  }

  ngAfterViewChecked() {
    this.currentUser = this.auth.current();
  }
}
