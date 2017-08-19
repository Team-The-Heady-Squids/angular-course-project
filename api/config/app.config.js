const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');

const app = express();

const attach = (data) => {
  const passport = require('./auth.config')(data);

  app.use('/', express.static('dist'));

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

  require('./routes')(app, data, passport);

  app.use((err, req, res, next) => {
    console.log(err.message);
    return res.status(404)
      .json(err.message);
  });

  return app;
};

module.exports = attach;
