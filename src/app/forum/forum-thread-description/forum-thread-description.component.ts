import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ForumService } from './../../_core/forum-service/forum.service';
import { AuthService } from './../../_core/auth-service/auth.service';

@Component({
  selector: 'app-forum-thread-description',
  templateUrl: './forum-thread-description.component.html',
  styleUrls: ['./forum-thread-description.component.css']
})
export class ForumThreadDescriptionComponent implements OnInit {
  currentUser;
  @Input()
  forumThread;
  @Output()
  postEdited = new EventEmitter();

  constructor(private forumService: ForumService,
    private auth: AuthService) { }

  ngOnInit() {
    this.currentUser = this.auth.current();
  }
  deleteThread() {
    this.forumService.deleteThread(this.forumThread.id)
      .subscribe((updatedThread) => {
        this.postEdited.emit(updatedThread);
      });
  }
}
