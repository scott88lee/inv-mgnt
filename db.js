const pg = require('pg');

const config = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'samima', //soundalchemymusic inventory management accounting
  port: 5432
};

const linode = {
  user: 'samima',
  password: 'weaser',
  host: '127.0.0.1',
  database: 'samima', //Linode config
  port: 5432
};

const awsRDS = {
  user: 'master',
  password: 'testing123',
  host: 'sam-dev.cqwedve0zmoz.ap-southeast-1.rds.amazonaws.com',
  database: 'samima', //Linode config
  port: 5432
};

const pool = new pg.Pool(awsRDS);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

module.exports = {
	pool : pool
}