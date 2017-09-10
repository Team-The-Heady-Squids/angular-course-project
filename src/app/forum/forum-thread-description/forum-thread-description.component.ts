import { ToastsManager } from 'ng2-toastr';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ForumService } from './../../_core/forum-service/forum.service';
import { AuthService } from './../../_core/auth-service/auth.service';

import { IForumThread } from './../../model/forumThread.model';

@Component({
  selector: 'app-forum-thread-description',
  templateUrl: './forum-thread-description.component.html',
  styleUrls: ['./forum-thread-description.component.css']
})
export class ForumThreadDescriptionComponent implements OnInit {
  currentUser: string;
  @Input()
  forumThread: IForumThread;
  @Output()
  forumThreadDeleted = new EventEmitter();

  constructor(private forumService: ForumService,
    private auth: AuthService,
    private toastr: ToastsManager) { }

  ngOnInit() {
    this.currentUser = this.auth.current();
  }

  deleteThread(): void {
    this.forumService.deleteThread(this.forumThread.id)
      .subscribe((updatedThread) => {
        this.toastr.success('Successfuly deleted thread!');
        this.forumThreadDeleted.emit(this.forumThread.id);
      });
  }
}
