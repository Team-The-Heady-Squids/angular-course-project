const { Router } = require('express');
const attach = (app, data) => {
  const controller = require('./thread.controller')(data);
  const router = new Router();

  router.post('/', controller.createThread);
  router.get('/:threadId', controller.getThread);
  router.delete('/:threadId', controller.deleteThread);
  router.post('/:threadId', controller.createPost);
  router.put('/:threadId', controller.editThread);
  router.put('/:threadId/post/:postId', controller.editPost);
  router.delete('/:threadId/post/:postId', controller.deletePost);

  app.use('/threads', router);
  console.log('Attached routes for /threads...');
};

module.exports = attach;
