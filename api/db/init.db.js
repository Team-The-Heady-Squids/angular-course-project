const { MongoClient } = require('mongodb');
const { DB_CONN_STRING } = require('../constants/');

const init = () => {
  return MongoClient.connect(DB_CONN_STRING);
};

module.exports = init;

