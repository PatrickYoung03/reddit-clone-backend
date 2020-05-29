// this file is setting up a link between our server and our data base

//1. require Pool class from pg after installing pg
const { Pool } = require("pg");

//2. create a new instance of Pool called pool, input the details of our own server to connect
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD
});

//3. export the function called query that will then allow us to get data to and from the database, could also be defined outside of module.exports and just sent over as 'query'
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
