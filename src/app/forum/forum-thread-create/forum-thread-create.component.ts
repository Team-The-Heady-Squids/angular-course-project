import { Router } from '@angular/router';
import { ForumService } from './../../_core/forum-service/forum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-thread-create',
  templateUrl: './forum-thread-create.component.html',
  styleUrls: ['./forum-thread-create.component.css']
})
export class ForumThreadCreateComponent implements OnInit {
  title;
  content;
  category;

  constructor(private router: Router, private forumService: ForumService) { }

  ngOnInit() {
  }

  createThread(threadData) {
    this.forumService.createThread(threadData)
      .subscribe((response) => {
        const id = response.id;

        this.router.navigateByUrl(`/forum/${id}`);
      });
  }
}
