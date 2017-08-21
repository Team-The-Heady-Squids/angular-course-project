const { Router } = require('express');
const attach = (app, data) => {
  const controller = require('./thread.controller')(data);
  const router = new Router();

  router.post('/', controller.createThread);
  router.get('/:threadId', controller.getThread);
  router.post('/:threadId', controller.createPost);
  router.delete('/:threadId', controller.deleteThread);
  router.put('/:threadId/:postId', controller.editPost);
  router.delete('/:threadId/:postId', controller.deletePost);

  app.use('/threads', router);
  console.log('Attached routes for /threads...');
};

module.exports = attach;
