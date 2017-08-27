import { SharedModule } from './../_shared/shared.module';
import { ForumRoutingModule } from './forum-routing.module';
import { NgModule } from '@angular/core';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { ForumThreadDescriptionComponent } from './forum-thread-description/forum-thread-description.component';
import { ForumThreadPostsComponent } from './forum-thread-posts/forum-thread-posts.component';
import { ForumThreadCreateComponent } from './forum-thread-create/forum-thread-create.component';
import { ForumPostComponent } from './forum-post/forum-post.component';

@NgModule({
  imports: [
    SharedModule,
    ForumRoutingModule
  ],
  declarations: [
    ForumViewComponent,
    ForumThreadDescriptionComponent,
    ForumThreadPostsComponent,
    ForumThreadCreateComponent,
    ForumPostComponent
  ]
})
export class ForumModule { }
