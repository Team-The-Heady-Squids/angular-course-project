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
import { IForumPost } from './../../model/forumPost.model';


@Injectable()
export class ForumService {

  private connectionURL = 'http://localhost:8080/threads';

  constructor(private http: Http) { }

  getThreads(): Observable<IThread[]> {
    return this.http.get(this.connectionURL)
      .map(response => response.json() as IThread[])
      .catch(this.handleErrors);
  }

  getThread(): Observable<IForumThread> {
    return this.http.get(this.connectionURL)
      .map(response => response.json() as IForumThread[])
      .map(data => data.sort((x, y) => Date.parse(x.created) - Date.parse(y.created)))
      .map(data => data[data.length - 1])
      .catch(this.handleErrors);
  }
  createThread(threadData: IThread) {
    return this.http.post(this.connectionURL, threadData, {
      headers: BaseHeaders.get(),
    })
      .map(response => response.json() as IThread[])
      .catch(this.handleErrors);
  }

  createPost(postData, threadId) {
    return this.http.post(`${this.connectionURL}/${threadId}`, postData, {
      headers: BaseHeaders.get(),
    })
      .map((response) => response.json() as IForumPost)
      .catch(this.handleErrors);
  }

  editPost(postData, postId, threadId) {
    return this.http.put(`${this.connectionURL}/${threadId}/${postId}`, postData, {
      headers: BaseHeaders.get(),
    })
      .map((response) => response.json() as IForumPost)
      .catch(this.handleErrors);
  }

  deletePost(postId, threadId) {
    return this.http.delete(`${this.connectionURL}/${threadId}/${postId}`, {
      headers: BaseHeaders.get(),
    })
      .map((response) => response.json() as IForumPost)
      .catch(this.handleErrors);
  }
  deleteThread(threadId) {
    return this.http.delete(`${this.connectionURL}/${threadId}`, {
      headers: BaseHeaders.get(),
    })
      .map((response) => response.json() as IThread)
      .catch(this.handleErrors);
  }
  getPostById(id: number): Observable<IForumThread> {
    return this.http.get(`${this.connectionURL}/${id}`)
      .map(response => response.json() as IThread[])
      .catch(this.handleErrors);
  }

  private handleErrors(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.json());
  }
}
