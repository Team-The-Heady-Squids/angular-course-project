import { NgModule } from '@angular/core';

import { SharedModule } from './../_shared/shared.module';
import { ForumRoutingModule } from './forum-routing.module';

import { ForumViewComponent } from './forum-view/forum-view.component';
import { ForumThreadDescriptionComponent } from './forum-thread-description/forum-thread-description.component';
import { ForumThreadPostsComponent } from './forum-thread-posts/forum-thread-posts.component';
import { ForumThreadCreateComponent } from './forum-thread-create/forum-thread-create.component';
import { ForumPostComponent } from './forum-post/forum-post.component';
import { ForumPostCreateComponent } from './forum-post-create/forum-post-create.component';

import { ForumThreadResolver } from './forum-thread-resolver.service';

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
    ForumPostComponent,
    ForumPostCreateComponent
  ],
  providers: [
    ForumThreadResolver
  ]
})
export class ForumModule { }
