import { ToastsManager } from 'ng2-toastr';
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

  constructor(private forumService: ForumService,
    private route: ActivatedRoute,
    private toastr: ToastsManager) { }

  ngOnInit() {
    this.forumThread = this.route.snapshot.data['thread'];
  }

  appendPost(event) {
    this.forumThread.posts.push(event.post);
  }

  updateThread(event) {
    this.forumThread = event.data;
    this.toastr.success(event.msg);
  }
}
