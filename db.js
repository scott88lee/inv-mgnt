const pg = require('pg');

//ADD MODELS here
const user = require('./models/user');

const configs = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'project2',
  port: 5432
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

module.exports = {
  pool: pool, //ADD MODEL EXPORT HERE
  user: user(pool)
};