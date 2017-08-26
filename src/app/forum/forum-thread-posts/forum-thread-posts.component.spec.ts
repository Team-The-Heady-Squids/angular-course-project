import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumThreadPostsComponent } from './forum-thread-posts.component';

describe('ForumThreadPostsComponent', () => {
  let component: ForumThreadPostsComponent;
  let fixture: ComponentFixture<ForumThreadPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumThreadPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
