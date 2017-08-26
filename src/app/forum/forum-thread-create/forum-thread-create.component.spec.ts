import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumThreadCreateComponent } from './forum-thread-create.component';

describe('ForumThreadCreateComponent', () => {
  let component: ForumThreadCreateComponent;
  let fixture: ComponentFixture<ForumThreadCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumThreadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
