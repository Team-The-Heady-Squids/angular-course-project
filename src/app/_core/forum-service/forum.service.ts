import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ForumService {
  constructor(private http: Http) { }

  getThreads() {
    return this.http.get('http://localhost:8080/threads')
      .toPromise();
  }

  getById(id) {
    return this.http.get(`http://localhost:8080/threads/${id}`)
      .toPromise();
  }
}
