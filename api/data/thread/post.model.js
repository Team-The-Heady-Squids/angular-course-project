class Post {
  constructor(content) {
    this.content = content;
    this.lastEdited = null;
  }

  static getId() {
    return Math.round(Math.pow((Math.random() * 100)
      /(Math.random()), Math.round(Math.random() * 3)));
  }

  static getCreated() {
    return (new Date()).toISOString();
  }
}

module.exports = Post;
