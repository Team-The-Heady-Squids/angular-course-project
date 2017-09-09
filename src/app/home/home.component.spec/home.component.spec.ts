import { Router } from '@angular/router';
// Test utils
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// Imported modules
import { SharedModule } from '../../_shared/shared.module';

// Services
import { ForumService } from '../../_core/forum-service/forum.service';
import { ActivatedRoute } from '@angular/router';

// Tested component
import { HomeComponent } from '../home.component';

// Mocks
import { activatedRouteMock, forumServiceMock, routerMock } from './home.component.spec.mocks';
import { testThread, reassignTestThread } from './test-thread';

const expected = {
  h1: 'Latest forum thread:'
};

describe('HomeComponent tests:', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;
  let parent: HTMLElement;
  let nextSibling: Element;
  let siblings: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          SharedModule
        ],
        declarations: [
          HomeComponent
        ],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRouteMock },
          { provide: ForumService, useValue: forumServiceMock },
          { provide: Router, useValue: routerMock }
        ]
      })
      .compileComponents()
      .then(() => {
        // Component setup
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.css('h1'));

        // Elements setup
        element = debugElement.nativeElement;
        parent = element.parentElement;
        nextSibling = element.nextElementSibling;
        siblings = parent.children.length;
      });
  }));

  describe(`When thread is NOT assigned yet:`, () => {
    it(`Expect to contain h1 with "${expected.h1}" inside`, () => {
      const title: string = element.innerHTML;
      expect(title).toEqual(expected.h1);
    });

    it(`Expect to contain h1 with 1 sibling initially`, () => {
      expect(siblings).toEqual(2);
    });
  });

  describe(`When thread IS assigned:`, () => {
    beforeEach(() => {
      fixture.detectChanges();
      nextSibling = element.nextElementSibling;
    });

    it(`Expect to contain h1 with 2 siblings`, () => {
      fixture.detectChanges();
      siblings = parent.children.length;
      expect(siblings).toEqual(3);
    });

    it(`Expect to contain h1 with next sibling div`, () => {
      expect(nextSibling instanceof HTMLDivElement).toBeTruthy();
    });

    it(`Expect the div to have two children`, () => {
      const divChildren: number = nextSibling.children.length;
      expect(divChildren).toEqual(2);
    });

    it(`Expect the div to have a h2 with "${testThread.title}" inside`, () => {
      const h2: HTMLElement = nextSibling.querySelector('h2');
      const content: string = h2.innerHTML;
      expect(content.indexOf(testThread.title)).toBeGreaterThanOrEqual(0);
    });

    it(`Expect the div to have a p with "${testThread.originalPost.content}" inside`, () => {
      const p: HTMLElement = nextSibling.querySelector('p');
      const content: string = p.innerHTML;
      expect(content.indexOf(testThread.originalPost.content)).toBeGreaterThanOrEqual(0);
    });

    describe(`When the thread is reassigned:`, () => {
      beforeEach(() => {
        fixture.detectChanges();
        component.forumThread = reassignTestThread;
        fixture.detectChanges();
      });

      it(`Expect the div to have a h2 with "${reassignTestThread.title}" inside`, () => {
        const h2: HTMLElement = nextSibling.querySelector('h2');
        const content: string = h2.innerHTML;
        expect(content.indexOf(reassignTestThread.title)).toBeGreaterThanOrEqual(0);
      });

      it(`Expect the div to have a p with "${reassignTestThread.originalPost.content}" inside`, () => {
        const p: HTMLElement = nextSibling.querySelector('p');
        const content: string = p.innerHTML;
        expect(content.indexOf(reassignTestThread.originalPost.content)).toBeGreaterThanOrEqual(0);
      });
    });
  });
});
