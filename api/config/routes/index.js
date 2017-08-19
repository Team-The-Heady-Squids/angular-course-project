module.exports = (app, data, passport) => {
  require('./thread')(app, data);
  require('./user')(app, data, passport);
};
