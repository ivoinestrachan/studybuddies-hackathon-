const Pool = require('pg').Pool
 
const pool = new Pool({

  user: 'postgres',
  password: 'chessmaster22',
  host: 'localhost',
  database: 'jwtauth',
  port: 5432,
});

module.exports = pool;