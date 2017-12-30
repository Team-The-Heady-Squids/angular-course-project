const express = require('express');

// Middlewares
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const attach = (data) => {
  const error = require('./err');
  const auth = require('./auth')(data);
  // Public folder
  app.use('/', express.static('dist'));

  // Attaching middlewares
  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan('tiny'));

  app.use(auth);

  app.use(function (req, res, next) {
    const allowedOrigins = ['http://127.0.0.1:4200', 'http://localhost:4200', 'http://127.0.0.1:8080', 'http://localhost:8080'];
    const origin = req.headers.origin;

    if (allowedOrigins.indexOf(origin) > -1) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
  });

  // Attaching routers
  require('./routes')(app, data);

  // Error handler
  app.use(error.handler);

  return app;
};

module.exports = attach;
