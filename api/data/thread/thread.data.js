const Thread = require('./thread.model');

const threadsData = (db) => {
  const threadDb = db.collection('threads');

  const getThread = (id) => {
    return new Promise((resolve, reject) => {
      threadDb.findOne({ id }, (err, match) => {
        if (err) {
          return reject(err);
        }
        return resolve(match);
      });
    });
  };

  const createThread = (threadData) => {
    console.log(threadData);
    const newThread = new Thread({
      author: threadData.author,
      title: threadData.title
    });
    return new Promise((resolve, reject) => {
      threadDb.insertOne(newThread, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(newThread);
      });
    });
  };
  const addPost = (postData) => {

  };

  const deletePost = (postId) => {

  };

  const editPost = (postId) => {

  };

  const deleteThread = (threadName) => {

  };

  return {
    getThread,
    createThread,
    addPost,
    deletePost,
    editPost,
    deleteThread,
  };
};

module.exports = threadsData;
