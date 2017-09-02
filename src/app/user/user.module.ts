import { UserProfileResolver } from './user-profile-resolver.service';
import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

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
