import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

  constructor() { }

  msg(msg: string): void {
    alert(msg);
  }
}
