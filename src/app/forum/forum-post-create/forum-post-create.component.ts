import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ToastsManager } from 'ng2-toastr';

import { ForumService } from './../../_core/forum-service/forum.service';

@Component({
  selector: 'app-forum-post-create',
  templateUrl: './forum-post-create.component.html',
  styleUrls: ['./forum-post-create.component.css']
})
export class ForumPostCreateComponent implements OnInit {
  @Output()
  postCreated = new EventEmitter();
  @Input()
  threadId: string;
  postForm: FormGroup;

  content: FormControl;

  constructor(private forumService: ForumService,
    private toastr: ToastsManager) { }

  ngOnInit(): void {
    this.content = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(200)
    ]);

    this.postForm = new FormGroup({
      content: this.content,
    });
  }

  createPost(postData): void {
    this.forumService.createPost(postData, this.threadId)
      .subscribe((post) => {
        this.toastr.success('Successfuly created post!');
        this.postForm.reset();
        this.postCreated.emit(post);
      },
      (error) => {
        this.toastr.error(error.msg);
      });
  }
}
