import { UserProfileResolver } from './user-profile-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { NotLoggedInGuard } from './../_core/_guards/not-logged-in-guard/not-logged-in-guard.service';
import { LoggedInGuard } from './../_core/_guards/logged-in-guard/logged-in-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotLoggedInGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard], resolve: {
      'profile': UserProfileResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
