import { Injectable } from '@angular/core';

@Injectable()
export class ForumService {
  threads = [
    { id: 1, title: 'Test title 1', author: 'Goshko', originalPost: 'Test-post-1', posts: ['asdf', 'dsaf', 'asdasd'] },
    { id: 2, title: 'Test title 2', author: 'Toshko', originalPost: 'Test-post-2', posts: ['tsdfmtd', 'sdftmf', 'tsdfmt'] },
    { id: 3, title: 'Test title 3', author: 'Peshko', originalPost: 'Test-post-3', posts: ['tnqwe', 'asdnt', 'tnas'] },
    { id: 4, title: 'Test title 4', author: 'Baba', originalPost: 'Test-post-4', posts: ['rewqrq', 'dtmsdf', 'tmsdfd'] },
    { id: 5, title: 'Test title 5', author: 'Dedo', originalPost: 'Test-post-5', posts: ['rqwne', 'rsand', 'rwen'] },
  ];
  constructor() { }

  getThreads() {
    return this.threads;
  }

  getById(id) {
    return this.threads.find(x => x.id === id);
  }
}
