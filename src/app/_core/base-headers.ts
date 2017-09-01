import { AuthService } from './auth-service/auth.service';
import { Headers } from '@angular/http';

export class BaseHeaders {
  headers = new Headers();

  constructor() {
    const authKey = localStorage.getItem('token');
    this.headers.append('X-Auth-Key', authKey);
  }

  get() {
    return this.headers;
  }
}
