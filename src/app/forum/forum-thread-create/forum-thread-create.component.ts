import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr';

import { ForumService } from './../../_core/forum-service/forum.service';

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
  categories: string[];

  constructor(private router: Router,
    private forumService: ForumService,
    private toastr: ToastsManager) { }

  ngOnInit() {
    this.categories = this.forumService.getCategories();

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

  createThread(threadData): void {
    this.forumService.createThread(threadData)
      .subscribe((response) => {
        const id = response.id;
        this.toastr.success('Successfuly created thread!');
        this.router.navigateByUrl(`/forum/${id}`);
      });
  }
}
