var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'movielist2'
});

connection.connect(); // server to mysql

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) {
    console.log('DB error', error)
  } else {
    console.log('mysql connected to server');
  }
});

// connection.end();

module.exports = connection;
// module.exports = {connection}
// // module.exports.connection = connection;