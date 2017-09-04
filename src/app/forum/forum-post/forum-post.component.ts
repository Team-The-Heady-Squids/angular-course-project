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

  constructor(private forumService: ForumService) { }

  ngOnInit() {
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
