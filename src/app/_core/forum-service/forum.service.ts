import { BaseHeaders } from './../base-headers';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ForumService {
  constructor(private http: Http, private baseHeaders: BaseHeaders) { }

  getThreads() {
    return this.http.get('http://localhost:8080/threads')
      .toPromise();
  }

  createThread(threadData) {
    return this.http.post(`http://localhost:8080/threads`, threadData, {
        headers: this.baseHeaders.get(),
      })
      .toPromise();
  }

  getById(id) {
    return this.http.get(`http://localhost:8080/threads/${id}`)
      .toPromise();
  }
}
