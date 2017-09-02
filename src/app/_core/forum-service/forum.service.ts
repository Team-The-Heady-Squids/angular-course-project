import { IForumThread } from './../../model/forumThread.model';
import { BaseHeaders } from './../base-headers';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { IThread } from './../../model/thread.model';

@Injectable()
export class ForumService {

  private connectionURL = 'http://localhost:8080/threads';

  constructor(private http: Http, private baseHeaders: BaseHeaders) { }

  getThreads(): Observable<IThread[]> {
    return this.http.get(this.connectionURL)
      .map(response => response.json() as IThread[])
      .catch(this.handleErrors);
  }

  createThread(threadData: IThread) {
    return this.http.post(this.connectionURL, threadData, {
      headers: this.baseHeaders.get(),
    })
      // .map(response => response.json() as IThread[])
      // .catch(this.handleErrors);
      .toPromise();
  }

  getById(id: number): Observable<IForumThread> {
    return this.http.get(`${this.connectionURL}/${id}`)
      .map(response => response.json() as IThread[])
      .catch(this.handleErrors);
  }

  private handleErrors(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.json());
  }
}
