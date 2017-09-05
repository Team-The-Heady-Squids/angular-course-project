import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ForumService } from './../_core/forum-service/forum.service';

@Injectable()
export class HomeThreadResolver implements Resolve<any> {

    constructor(private forumService: ForumService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.forumService.getThread();
    }
}
