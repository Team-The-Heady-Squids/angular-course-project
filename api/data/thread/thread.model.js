const threadId = (title) => {
  const prefix = Math.round(Math.random() * 10000);
  title = title.toLowerCase();
  return (`${prefix}-${title}`)
    .split(' ')
    .join('-');
};

class Thread {
  constructor(threadData) {
    this.author = threadData.author;
    this.title = threadData.title;
    this.id = threadId(threadData.title);
    this.posts = [];
  }
}

module.exports = Thread;
