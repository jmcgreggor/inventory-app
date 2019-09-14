const pgp = require('pg-promise')({
  query: x => {
    console.log(`QUERY: `, x.query);
  }
});

const options = {
  user: 'james.mcgreggor',
  // password: '',
  host: 'localhost',
  database: 'inventorydb',
  port: 5432,
};

const db = pgp(options);

module.exports = db;
