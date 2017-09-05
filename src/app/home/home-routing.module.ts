import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeThreadResolver } from './home-thread-resolver.service';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { 'home': HomeThreadResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
