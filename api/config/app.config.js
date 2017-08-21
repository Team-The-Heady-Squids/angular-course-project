const express = require('express');

// Middlewares
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');

const app = express();

const attach = (data) => {
  const passport = require('./auth.config')(data);
  const error = require('./err');

  // Public folder
  app.use('/', express.static('dist'));

  // Attaching middlewares
  app.use(cors());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(morgan('tiny'));
  app.use(session({
    secret: 'ala bala',
    resave: false,
    saveUninitialized: true,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // Attaching routers
  require('./routes')(app, data, passport);

  // Error handler
  app.use(error.handler);

  return app;
};

module.exports = attach;
