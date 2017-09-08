import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ZoomInTextDirective } from './zoom-in-text.directive';

import { NotFoundComponent } from './not-found/not-found.component';

import { ReduceTextLengthPipe } from './reduce-text-length/reduce-text-length.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ZoomInTextDirective,
    NotFoundComponent,
    ReduceTextLengthPipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NotFoundComponent,
    ZoomInTextDirective,
    ReactiveFormsModule,
    ReduceTextLengthPipe
  ]
})
export class SharedModule { }
