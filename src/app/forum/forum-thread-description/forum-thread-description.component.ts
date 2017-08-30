import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forum-thread-description',
  templateUrl: './forum-thread-description.component.html',
  styleUrls: ['./forum-thread-description.component.css']
})
export class ForumThreadDescriptionComponent implements OnInit {
  @Input()
  forumThread;

  constructor() { }

  ngOnInit() {
  }

}
