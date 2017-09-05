import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { HomeThreadResolver } from './home-thread-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [HomeThreadResolver]
})
export class HomeModule { }
