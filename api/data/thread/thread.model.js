class Thread {
  constructor(threadData) {
    this.author = threadData.author;
    this.title = threadData.title;
    this.id = Thread.getId(threadData.title);
    this.originalPost = threadData.originalPost;
    this.posts = [];
    this.created = (new Date()).toISOString();
  }

  static getId(title) {
    const prefix = Math.round(Math.random() * 10000);
    title = title.toLowerCase();
    return (`${prefix}-${title}`)
      .split(' ')
      .join('-');
  }
}

module.exports = Thread;
