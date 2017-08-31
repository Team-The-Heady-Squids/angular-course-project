import { AlertService } from './../alert-service/alert.service';
import { UsersService } from './../users-service/index';
import { LoggerService } from './../logger-service/index';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService,
    private logger: LoggerService,
    private alert: AlertService) { }

  writeToLocalStorage(data) {
    localStorage.setItem('username', data['username']);
    localStorage.setItem('token', data['authKey']);
    window.location.reload();
    return Promise.resolve();
  }

  register(user) {
    return this.usersService.register(user)
      .then((response) => {
        response = response.json();
        const match = response['user'];
        const msg = response['msg'];
        this.alert.msg(msg);
        return this.writeToLocalStorage(match);
      });
  }

  login(user) {
    return this.usersService.login(user)
      .then((response) => {
        response = response.json();
        const match = response['user'];
        const msg = response['msg'];
        this.alert.msg(msg);
        return this.writeToLocalStorage(match);
      });
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  current() {
    return localStorage.getItem('username');
  }
}
