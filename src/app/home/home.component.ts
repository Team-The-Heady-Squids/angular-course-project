import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { ForumService } from './../_core/forum-service/forum.service';
import { IForumThread } from './../model/forumThread.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private forumThread: IForumThread;

  constructor(private forumService: ForumService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.forumThread = this.route.snapshot.data['home'];
  }

  goToForumPost() {
    this.router.navigateByUrl(`forum/${this.forumThread.id}`);
  }
}
