const mysql = require('mysql2');

// Create a connection pool for MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'srikanth',  // Replace with your MySQL user
  password: 'Srikanth@2004',  // Replace with your MySQL password
  database: 'employee_db',
});

const promisePool = pool.promise();

module.exports = promisePool;

