import { ForumService } from './../../_core/forum.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum-thread-posts',
  templateUrl: './forum-thread-posts.component.html',
  styleUrls: ['./forum-thread-posts.component.css']
})
export class ForumThreadPostsComponent implements OnInit {
  thread;

  constructor(private forum: ForumService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.params['id'], 10);
    console.log(id);
    this.thread = this.forum.getById(id);
  }

}
