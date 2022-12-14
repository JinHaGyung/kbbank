var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '95052910',
  database : 'kbbank'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });