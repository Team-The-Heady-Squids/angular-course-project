import { Component, OnInit } from '@angular/core';

import { ForumService } from '../../_core/forum-service/index';

import { IForumThread } from './../../model/forumThread.model';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.css']
})
export class ForumViewComponent implements OnInit {
  forumThreads: IForumThread[];
  categories: string[] = [];
  constructor(private forumService: ForumService) { }

  ngOnInit() {
    this.forumService.getThreads()
      .subscribe((forumThreads) => {
        this.forumThreads = forumThreads;
        forumThreads.forEach((thread: IForumThread): void => {
          const category: string = thread.category;
          if (this.categories.indexOf(category) === -1) {
            this.categories.push(category);
          }
          this.forumService.setCategories(this.categories);
        });
      });
  }

  removeThread(threadId: string): void {
    const index: number = this.forumThreads.findIndex((x) => x.id === threadId);
    this.forumThreads.splice(index, 1);
  }
}
