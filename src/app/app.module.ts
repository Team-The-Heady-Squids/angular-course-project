import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CoreModule } from './_core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HeaderModule,
    AppRoutingModule,
    CoreModule // Contains global services
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
