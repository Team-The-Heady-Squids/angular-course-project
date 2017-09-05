import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from './../_shared/shared.module';
import { LoginNavComponent } from './login-nav/login-nav.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    LoginNavComponent,
    HeaderComponent
  ],
  exports: [
    LoginNavComponent,
    HeaderComponent
  ]
})
export class HeaderModule { }
