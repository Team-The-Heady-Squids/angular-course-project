import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomInTextDirective } from './zoom-in-text.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ZoomInTextDirective
  ],
  exports: [
    CommonModule,
    ZoomInTextDirective
  ]
})
export class SharedModule { }
