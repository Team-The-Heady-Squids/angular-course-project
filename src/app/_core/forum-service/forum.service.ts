import { Injectable } from '@angular/core';

@Injectable()
export class ForumService {
  threads = [
    {
      author: 'admin', title: 'test-thread-1', id: '1234-test-thread-1', category: 'cars', created: '12-13-15 20:15',
      originalPost: {
        content: 'test-content-cars-1'
      }, posts: [
        { content: 'asdf123', author: 'ivan', id: 1234, created: '12-13-15 20:15' },
        { content: 'reqrq', author: 'pesho', id: 1234, created: '12-13-15 20:15' },
        { content: 'yqweyeqw', author: 'gosho', id: 1234, created: '12-13-15 20:15' },
      ]
    }, {
      author: 'ivan', title: 'test-thread-2', id: '1234-test-thread-2', category: 'cars', created: '12-13-15 20:15',
      originalPost: {
        content: 'test-content-cars-2'
      }, posts: [
        { content: 'teqwtq', author: 'pesho', id: 1234, created: '12-13-15 20:15' },
        { content: 'fasdfas', author: 'gosho', id: 1234, created: '12-13-15 20:15' },
        { content: 'basdfb', author: 'admin', id: 1234, created: '12-13-15 20:15' },
      ]
    },
  ];
  constructor() { }

  getThreads() {
    return Promise.resolve(this.threads);
  }

  getById(id) {
    const match = this.threads.find(x => x.id === id);
    return Promise.resolve(match);
  }
}
