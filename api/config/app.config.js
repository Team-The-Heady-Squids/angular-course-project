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

  // Attaching routers
  require('./routes')(app, data);

  // Error handler
  app.use(error.handler);

  return app;
};

module.exports = attach;
