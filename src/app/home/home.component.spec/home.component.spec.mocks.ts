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

const routerMock = {};

export { forumServiceMock, activatedRouteMock, routerMock };
