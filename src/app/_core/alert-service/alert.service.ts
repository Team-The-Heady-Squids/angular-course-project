import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

  constructor() { }

  msg(msg) {
    alert(msg);
  }
}
