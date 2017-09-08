import { NgModule } from '@angular/core';

import { SharedModule } from './../_shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { UserProfileResolver } from './user-profile-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  providers: [
    UserProfileResolver
  ]
})
export class UserModule { }
