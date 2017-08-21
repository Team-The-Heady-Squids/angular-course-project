const { errors } = require('../../err/');

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
    if (!req.user) {
      return errors.notLoggedIn(next);
    }
    const author = req.user.username;
    const title = req.body.title;
    const content = req.body.content;
    return data.thread.createThread({ author, title, content })
      .then((newThread) => {
        res.status(200)
          .json(newThread);
      })
      .catch((err) => {
        next(err);
      });
  };

  const deleteThread = (req, res, next) => {
    if (!req.user) {
      return errors.notLoggedIn(next);
    }
    const username = req.user.username;
    const id = req.params.threadId;
    return data.thread.getThread(id)
      .then((match) => {
        if (!match) {
          return errors.nonExistingThread();
        }
        if (username !== match.author) {
          return errors.notOwner();
        }
        return data.thread.deleteThread(id);
      })
      .then((result) => {
        res.status(200)
          .json({
            msg: result,
          });
      })
      .catch((err) => {
        next(err);
      });
  };

  const createPost = (req, res, next) => {
    if (!req.user) {
      return errors.notLoggedIn(next);
    }
    const author = req.user.username;
    const postData = req.body;
    const threadId = req.params.threadId;
    return data.thread.createPost({ author, threadId, postData })
      .then((result) => {
        res.status(200)
          .json({
            msg: result,
          });
      })
      .catch((err) => {
        next(err);
      });
  };

  const editPost = (req, res, next) => {
    if (!req.user) {
      return errors.notLoggedIn(next);
    }
    const author = req.user.username;
    const threadId = req.params.threadId;
    const postId = parseInt(req.params.postId, 10);
    const newContent = req.body.content;
    return data.thread.editPost({ author, newContent, threadId, postId })
      .then((result) => {
        res.status(200)
          .json({
            msg: result,
          });
      })
      .catch((err) => {
        next(err);
      });
  };

  const deletePost = (req, res, next) => {
    if (!req.user) {
      return errors.notLoggedIn(next);
    }
    const author = req.user.username;
    const threadId = req.params.threadId;
    const postId = parseInt(req.params.postId, 10);
    return data.thread.deletePost({ author, threadId, postId })
      .then((result) => {
        res.status(200)
          .json({
            msg: result,
          });
      })
      .catch((err) => {
        next(err);
      });
  };

  return {
    getThread,
    createThread,
    deleteThread,
    createPost,
    editPost,
    deletePost,
  };
};

module.exports = controller;
