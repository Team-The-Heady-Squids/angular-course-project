import { ForumService } from './../_core/forum-service/forum.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ForumThreadResolver implements Resolve<any> {

  constructor(private forumService: ForumService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'];
    return this.forumService.getPostById(id);
  }
}
