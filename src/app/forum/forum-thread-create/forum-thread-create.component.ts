import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';
import { ForumService } from './../../_core/forum-service/forum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-thread-create',
  templateUrl: './forum-thread-create.component.html',
  styleUrls: ['./forum-thread-create.component.css']
})
export class ForumThreadCreateComponent implements OnInit {
  threadCreateForm: FormGroup;
  title: FormControl;
  content: FormControl;
  category: FormControl;

  constructor(private router: Router,
    private forumService: ForumService,
    private toastr: ToastsManager) { }

  ngOnInit() {
    this.title = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ]);
    this.content = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(200)
    ]);
    this.category = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15)
    ]);

    this.threadCreateForm = new FormGroup({
      title: this.title,
      content: this.content,
      category: this.category,
    });
  }

  createThread(threadData) {
    this.forumService.createThread(threadData)
      .subscribe((response) => {
        const id = response.id;
        this.toastr.success('Successfuly created thread!');
        this.router.navigateByUrl(`/forum/${id}`);
      });
  }
}
