import { TestBed, inject } from '@angular/core/testing';

import { ForumThreadResolverService } from './forum-thread-resolver.service';

describe('ForumThreadResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumThreadResolverService]
    });
  });

  it('should be created', inject([ForumThreadResolverService], (service: ForumThreadResolverService) => {
    expect(service).toBeTruthy();
  }));
});
