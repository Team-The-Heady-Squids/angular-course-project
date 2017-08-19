const controller = (data) => {
  const getThread = (req, res, next) => {
    const id = req.params.threadId;
    data.thread.getThread(id)
      .then((thread) => {
        res.status(200)
          .json(thread);
      })
      .catch((err) => {
        next(err);
      });
  };

  const createThread = (req, res, next) => {
    const author = req.user.username;
    const title = req.body.title;
    const content = req.body.content;
    data.thread.createThread({ author, title, content })
      .then((newThread) => {
        res.status(200)
          .json(newThread);
      })
      .catch((err) => {
        next(err);
      });
  };

  const editThread = (req, res, next) => {

  };

  const deleteThread = (req, res, next) => {

  };

  const createPost = (req, res, next) => {

  };

  const editPost = (req, res, next) => {

  };

  const deletePost = (req, res, next) => {

  };

  return {
    getThread,
    createThread,
    editThread,
    deleteThread,
    createPost,
    editPost,
    deletePost,
  };
};

module.exports = controller;
