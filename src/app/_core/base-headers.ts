import { Headers } from '@angular/http';

import { AuthService } from './auth-service/auth.service';

export class BaseHeaders {
  constructor() {}

  static get(): Headers {
    const headers: Headers = new Headers();
    const authkey: string = localStorage.getItem('token');
    headers.append('X-Auth-Key', authkey);
    return headers;
  }
}
