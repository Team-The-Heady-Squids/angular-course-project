import { IForumThread } from './../../model/forumThread.model';

const testThread: IForumThread = {
  author: 'test-author',
  title: 'test-title',
  originalPost: {
    content: 'test-content',
  },
  created: 'test-created',
  id: `1234-${this.title}`,
  posts: [],
  category: 'test-category'
};

const reassignTestThread: IForumThread = {
  author: 'reassign-author',
  title: 'reassign-title',
  originalPost: {
    content: 'reassign-content',
  },
  created: 'reassign-created',
  id: `1234-${this.title}`,
  posts: [],
  category: 'reassign-category'
};

export { testThread, reassignTestThread };
