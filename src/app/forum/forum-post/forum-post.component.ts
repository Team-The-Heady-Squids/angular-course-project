import { ForumService } from './../../_core/forum-service/forum.service';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Renderer2,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  @ViewChild('controls')
  controls: ElementRef;
  @Input()
  post;
  @Input()
  threadId;
  @Output()
  postEdited = new EventEmitter();

  content;

  controlsCollapsed = true;

  constructor(private render: Renderer2,
    private forumService: ForumService) { }

  ngOnInit() {
  }

  toggleControls() {
    if (this.controlsCollapsed) {
      this.render.removeClass(this.controls.nativeElement, 'hidden');
    } else {
      this.render.addClass(this.controls.nativeElement, 'hidden');
    }
    this.controlsCollapsed = !this.controlsCollapsed;
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
