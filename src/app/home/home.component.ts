import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, AfterContentInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { ForumService } from './../_core/forum-service/forum.service';
import { IForumThread } from './../model/forumThread.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {
  private forumThread: IForumThread;
  constructor(private forumService: ForumService,
    private router: Router) { }

  ngOnInit() {
    this.forumService.getThread()
      .subscribe(data => this.forumThread = data);
    console.log(this.forumThread);

  }
  ngAfterContentInit(): void {
    // this.forumService.getThread()
    //   .subscribe(data => this.forumThread = data);
    // console.log(this.forumThread.originalPost);
  }

  goToForumPost() {
    this.router.navigateByUrl(`forum/${this.forumThread.id}`);
    console.log(this.forumThread);
  }
}
