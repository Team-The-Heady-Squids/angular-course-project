import { AlertService } from './alert-service/alert.service';
import { BaseHeaders } from './base-headers';
import { NgModule } from '@angular/core';

import { AuthService } from './auth-service/index';
import { UsersService } from './users-service/index';
import { ForumService } from './forum-service/index';
import { LoggerService } from './logger-service/index';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ForumService,
    UsersService,
    AuthService,
    LoggerService,
    AlertService,
    BaseHeaders
  ]
})
export class CoreModule { }
