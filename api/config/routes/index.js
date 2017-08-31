module.exports = (app, data) => {
  require('./thread')(app, data);
  require('./user')(app, data);
};
