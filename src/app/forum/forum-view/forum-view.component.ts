import { ForumService } from './../../_core/forum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.css']
})
export class ForumViewComponent implements OnInit {
  threads: any[];
  constructor(private forum: ForumService) { }

  ngOnInit() {
    this.threads = this.forum.getThreads();
  }

}
