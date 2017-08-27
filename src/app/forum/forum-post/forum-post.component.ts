import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  @Input()
  post;

  constructor() { }

  ngOnInit() {
  }

}
