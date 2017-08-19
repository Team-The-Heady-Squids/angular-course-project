const { Router } = require('express');
const attach = (app, data, passport) => {
  const controller = require('./user.controller')(data);
  const router = new Router();

  router.post('/register', controller.registerUser);
  router.put('/auth', passport.authenticate('local'), controller.loginUser);
  router.put('/logout', controller.logoutUser);
  router.get('/profile', controller.ownProfile);
  router.put('/profile', controller.updateUser);
  router.get('/profile/:username', controller.userProfile);

  app.use('/users', router);
  console.log('Attached routes for /users...');
};

module.exports = attach;
