import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, ProfileComponent]
})
export class UserModule { }
