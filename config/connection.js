// Set up MySQL connection.
const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'root',
//   database: 'burgers_db',
// });


connection = mysql.createConnection({
  host: 'sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
  port: 3306,
  user: 'hxcvplk4x5wsgvdw',
  password: 'l9p980bq552xug63',
  database: 'qylv20h1zbug7zsa',
});


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
