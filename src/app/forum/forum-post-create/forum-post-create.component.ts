import { ForumService } from './../../_core/forum-service/forum.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forum-post-create',
  templateUrl: './forum-post-create.component.html',
  styleUrls: ['./forum-post-create.component.css']
})
export class ForumPostCreateComponent implements OnInit {
  @Output()
  postCreated = new EventEmitter();
  @Input()
  threadId;

  content;

  constructor(private forumService: ForumService) { }

  ngOnInit() {
  }

  createPost(postData) {
    this.forumService.createPost(postData, this.threadId)
      .subscribe((post) => {
        this.postCreated.emit(post);
      });
  }
}
