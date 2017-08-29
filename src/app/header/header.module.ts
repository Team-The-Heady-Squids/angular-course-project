import { SharedModule } from './../_shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { LoginNavComponent } from './login-nav/login-nav.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    NavComponent,
    LoginNavComponent
  ],
  exports: [
    NavComponent,
    LoginNavComponent
  ]
})
export class HeaderModule { }
