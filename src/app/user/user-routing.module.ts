import { NotLoggedInGuard } from './../_core/_guards/not-logged-in-guard/not-logged-in-guard.service';
import { LoggedInGuard } from './../_core/_guards/logged-in-guard/logged-in-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotLoggedInGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
