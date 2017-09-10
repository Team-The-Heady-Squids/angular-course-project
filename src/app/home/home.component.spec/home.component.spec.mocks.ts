import { Injectable } from '@angular/core';
import { testThread } from './test-thread';

const forumServiceMock = {};

const activatedRouteMock = {
  snapshot: {
    data: {
      home: testThread,
    }
  }
};

const routerMock = {
  navigateByUrl: (url) => {
    console.log('called');
    return null;
  }
};

export { forumServiceMock, activatedRouteMock, routerMock };
