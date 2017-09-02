import { TestBed, inject } from '@angular/core/testing';

import { UserProfileResolverService } from './user-profile-resolver.service';

describe('UserProfileResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileResolverService]
    });
  });

  it('should be created', inject([UserProfileResolverService], (service: UserProfileResolverService) => {
    expect(service).toBeTruthy();
  }));
});
