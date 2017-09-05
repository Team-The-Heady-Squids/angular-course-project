import { AuthService } from './auth-service/auth.service';
import { Headers } from '@angular/http';

export class BaseHeaders {
  constructor() {}

  static get() {
    const headers = new Headers();
    const authkey = localStorage.getItem('token');
    headers.append('X-Auth-Key', authkey);
    return headers;
  }
}
