import { ForumThreadResolver } from './forum-thread-resolver.service';
import { LoggedInGuard } from './../_core/_guards/logged-in-guard/logged-in-guard.service';
import { ForumThreadPostsComponent } from './forum-thread-posts/forum-thread-posts.component';
import { ForumThreadCreateComponent } from './forum-thread-create/forum-thread-create.component';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'threads', pathMatch: 'full' },
  { path: 'threads', component: ForumViewComponent },
  { path: 'create-thread', component: ForumThreadCreateComponent, canActivate: [LoggedInGuard] },
  { path: ':id', component: ForumThreadPostsComponent, resolve: {
      'thread': ForumThreadResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
