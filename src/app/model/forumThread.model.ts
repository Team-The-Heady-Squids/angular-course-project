import { IThread } from './thread.model';

export interface IForumThread {
    author: string;
    title: string;
    id: string;
    originalPost: Array<string>;
    posts: Array<IThread>;
    created: string;
}
