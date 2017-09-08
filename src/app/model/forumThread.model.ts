import { IThread } from './thread.model';

export interface IForumThread {
    author: string;
    title: string;
    id: string;
    originalPost: {
        content: string;
    };
    posts: Array<IThread>;
    created: string;
    category: string;
}
