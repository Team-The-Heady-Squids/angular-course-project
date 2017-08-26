import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { ForumThreadDescriptionComponent } from './forum-thread-description/forum-thread-description.component';
import { ForumThreadPostsComponent } from './forum-thread-posts/forum-thread-posts.component';
import { ForumThreadCreateComponent } from './forum-thread-create/forum-thread-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ForumViewComponent, ForumThreadDescriptionComponent, ForumThreadPostsComponent, ForumThreadCreateComponent]
})
export class ForumModule { }
