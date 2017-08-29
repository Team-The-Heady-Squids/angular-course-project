import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../_core/forum-service/index';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.css']
})
export class ForumViewComponent implements OnInit {
  threads;
  constructor(private forum: ForumService) { }

  ngOnInit() {
    this.forum.getThreads()
      .then((threads) => {
        this.threads = threads;
      });
  }

}
