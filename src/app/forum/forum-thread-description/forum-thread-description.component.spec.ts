import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumThreadDescriptionComponent } from './forum-thread-description.component';

describe('ForumThreadDescriptionComponent', () => {
  let component: ForumThreadDescriptionComponent;
  let fixture: ComponentFixture<ForumThreadDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumThreadDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
