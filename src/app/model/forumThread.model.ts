import { IThread } from './thread.model';

export interface IForumThread {
    author: string;
    title: string;
    id: string;
    originalPost: Object;
    posts: Array<IThread>;
    created: string;
}
