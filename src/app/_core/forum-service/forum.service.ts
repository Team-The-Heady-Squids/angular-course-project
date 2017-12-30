import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { IThread } from './../../model/thread.model';
import { IForumPost } from './../../model/forumPost.model';
import { IForumThread } from './../../model/forumThread.model';
import { BaseHeaders } from './../base-headers';

import { PORT } from '../../../../api/constants/index.js';



@Injectable()
export class ForumService {
  categories: string[];

  private connectionURL = `http://localhost:${PORT}/users`; // http://localhost:8080/threads

  constructor(private http: Http) { }

  getThreads(): Observable<IForumThread[]> {
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

  createThread(threadData: IThread): Observable<IForumThread> {
    return this.http.post(this.connectionURL, threadData, {
      headers: BaseHeaders.get(),
    })
      .map(response => response.json() as IThread[])
      .catch(this.handleErrors);
  }

  createPost(postData, threadId: string): Observable<IForumPost> {
    return this.http.post(`${this.connectionURL}/${threadId}`, postData, {
      headers: BaseHeaders.get(),
    })
      .map((response) => response.json() as IForumPost)
      .catch(this.handleErrors);
  }

  editPost(postData, postId: number, threadId: string): Observable<IForumPost> {
    return this.http.put(`${this.connectionURL}/${threadId}/${postId}`, postData, {
      headers: BaseHeaders.get(),
    })
      .map((response) => response.json() as IForumPost)
      .catch(this.handleErrors);
  }

  deletePost(postId: number, threadId: string): Observable<IForumPost> {
    return this.http.delete(`${this.connectionURL}/${threadId}/${postId}`, {
      headers: BaseHeaders.get(),
    })
      .map((response) => response.json() as IForumPost)
      .catch(this.handleErrors);
  }

  deleteThread(threadId: string): Observable<IForumThread> {
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

  setCategories(categories: string[]): void {
    this.categories = categories;
  }

  getCategories(): string[] {
    return this.categories;
  }

  private handleErrors(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.json());
  }
}
