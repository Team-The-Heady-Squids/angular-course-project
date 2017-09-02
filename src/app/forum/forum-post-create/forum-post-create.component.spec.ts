import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPostCreateComponent } from './forum-post-create.component';

describe('ForumPostCreateComponent', () => {
  let component: ForumPostCreateComponent;
  let fixture: ComponentFixture<ForumPostCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumPostCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
