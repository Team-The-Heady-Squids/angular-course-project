import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { AuthService } from './../../_core/auth-service/auth.service';
import { ForumService } from './../../_core/forum-service/forum.service';

import { IForumPost } from './../../model/forumPost.model';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  @Input()
  post: IForumPost;
  @Input()
  threadId: string;
  @Output()
  postEdited = new EventEmitter();

  editPostForm: FormGroup;
  content: FormControl;

  controlsCollapsed = true;

  currentUser;

  constructor(private forumService: ForumService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.auth.current();

    this.content = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(200)
    ]);

    this.editPostForm = new FormGroup({
      content: this.content,
    });
  }

  editPost(postData: { content: string }): void {
    this.forumService.editPost(postData, this.post.id, this.threadId)
      .subscribe((updatedThread) => {
        this.postEdited.emit(updatedThread);
      });
  }

  deletePost(): void {
    this.forumService.deletePost(this.post.id, this.threadId)
      .subscribe((updatedThread) => {
        this.postEdited.emit(updatedThread);
      });
  }

}
