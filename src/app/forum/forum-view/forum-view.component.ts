import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../_core/forum-service/index';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.css']
})
export class ForumViewComponent implements OnInit {
  forumThreads;
  constructor(private forumService: ForumService) { }

  ngOnInit() {
    this.forumService.getThreads()
      .then((forumThreads) => {
        this.forumThreads = forumThreads;
      });
  }

}
