import { Injectable } from '@angular/core';

interface User {
  username: string;
  passHash: string;
  authKey: string;
}

@Injectable()
export class UsersService {
  users: User[] = [
    { username: 'pesho', passHash: 'asd123', authKey: 'fwefbqwekfwpqkbppo' },
    { username: 'ivan', passHash: 'asd123', authKey: 'nrqwernqwtwmtewmtq' },
    { username: 'admin', passHash: 'asd123', authKey: 'twqwnernqwrneqwqw' },
    { username: 'gosho', passHash: 'asd123', authKey: 'brweqtasdtmasttmsad' },
    { username: 'tosho', passHash: 'asd123', authKey: 'rbebrqwrqwerwqrqrew' }
  ];

  constructor() { }

  login(data) {
    return new Promise<User>((resolve, reject) => {
      resolve(this.users.find(user => user.username === data.username));
    });
  }

  register(user) {
    if (this.users.find(u => u.username === user.username)) {
      throw new Error('Username already exist');
    }
    if (this.users.find(u => u.passHash === user.passHash)) {
      throw new Error('Password already exist');
    }

    return new Promise<any>((resolve, reject) => {
      resolve(this.users.push(user));
    });
  }
}
