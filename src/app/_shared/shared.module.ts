import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ZoomInTextDirective } from './zoom-in-text.directive';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ZoomInTextDirective,
    NotFoundComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NotFoundComponent,
    ZoomInTextDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
