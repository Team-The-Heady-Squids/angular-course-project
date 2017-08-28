import { ForumService } from './_core/forum.service';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    AlertModule.forRoot(),
  ],
  providers: [
    ForumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
