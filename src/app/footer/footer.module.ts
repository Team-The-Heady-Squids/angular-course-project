import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../_shared/shared.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
