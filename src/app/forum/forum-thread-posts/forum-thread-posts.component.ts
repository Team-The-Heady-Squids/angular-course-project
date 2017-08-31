import { ForumService } from './../../_core/forum-service/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum-thread-posts',
  templateUrl: './forum-thread-posts.component.html',
  styleUrls: ['./forum-thread-posts.component.css']
})
export class ForumThreadPostsComponent implements OnInit {
  forumThread = {
    author: '',
    title: '',
    id: '',
    originalPost: {
      content: '',
    },
    posts: [],
    created: '',
  };

  constructor(private forumService: ForumService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.forumService.getById(id)
      .then((forumThread) => {
        this.forumThread = forumThread.json();
        console.log(this.forumThread);
      });
  }
}
