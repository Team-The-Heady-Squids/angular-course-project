import { SharedModule } from './../_shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class HeaderModule { }
