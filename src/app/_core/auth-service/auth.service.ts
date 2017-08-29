import { UsersService } from './../users-service/index';
import { LoggerService } from './../logger-service/index';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private users: UsersService, private logger: LoggerService) { }

  login(user) {
    return this.users.login(user)
      .then((match) => {
        if (!match) {
          return this.logger.log('Wrong username!');
        }
        if (match.passHash !== user.passHash) {
          return this.logger.log('Wrong password!');
        }
        this.logger.log('Successful login');
        localStorage.setItem('username', match.username);
        localStorage.setItem('token', match.authKey);
        window.location.reload();
        return Promise.resolve();
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
