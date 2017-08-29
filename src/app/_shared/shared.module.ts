import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ZoomInTextDirective } from './zoom-in-text.directive';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ZoomInTextDirective,
    NotFoundComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    NotFoundComponent,
    ZoomInTextDirective
  ]
})
export class SharedModule { }
