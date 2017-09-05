import { AuthService } from './../../_core/auth-service/auth.service';
import { ForumService } from './../../_core/forum-service/forum.service';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  @Input()
  post;
  @Input()
  threadId;
  @Output()
  postEdited = new EventEmitter();

  content;

  controlsCollapsed = true;

  currentUser;

  constructor(private forumService: ForumService,
    private auth: AuthService) { }

  ngOnInit() {
    this.currentUser = this.auth.current();
  }

  editPost(postData) {
    this.forumService.editPost(postData, this.post.id, this.threadId)
      .subscribe((updatedThread) => {
        this.postEdited.emit(updatedThread);
      });
  }

  deletePost() {
    this.forumService.deletePost(this.post.id, this.threadId)
      .subscribe((updatedThread) => {
        this.postEdited.emit(updatedThread);
      });
  }

}
