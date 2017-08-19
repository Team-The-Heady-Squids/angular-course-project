module.exports = (db) => {
  return {
    user: require('./user')(db),
    thread: require('./thread')(db),
  };
};
