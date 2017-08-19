const { PORT } = require('./constants/');

const run = () => {
  return require('./db')()
    .then((db) => {
      console.log('Initialized db...');
      return require('./data')(db);
    })
    .then((data) => {
      console.log('Initialized data layer...');
      return require('./config')(data);
    })
    .then((app) => {
      console.log('Launching server...');
      console.log('====================');
      app.listen(PORT, () => {
        console.log(`Listening on :${PORT}...`);
      });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { run };
