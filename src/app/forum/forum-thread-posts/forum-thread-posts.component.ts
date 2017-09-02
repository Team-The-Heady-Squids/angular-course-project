import { ForumService } from './../../_core/forum-service/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IForumThread } from './../../model/forumThread.model';

@Component({
  selector: 'app-forum-thread-posts',
  templateUrl: './forum-thread-posts.component.html',
  styleUrls: ['./forum-thread-posts.component.css']
})
export class ForumThreadPostsComponent implements OnInit {
  forumThread: IForumThread;

  // forumThread = {
  //   author: '',
  //   title: '',
  //   id: '',
  //   originalPost: {
  //     content: '',
  //   },
  //   posts: [],
  //   created: '',
  // };

  constructor(private forumService: ForumService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.forumService.getById(id)
      .subscribe((forumThread) => {
        this.forumThread = forumThread;
        console.log(this.forumThread);
      });
  }
}
