var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '95052910',
  database : 'kbbank',
  dateStrings : 'date'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  //공지사항을 추출할 때
function getNoti(callback) {
  connection.query('SELECT * FROM kbnotice ORDER BY date desc', (err, rows, fields) => {
      if(err) throw err;
      callback(rows);
  })
}
//공지사항을 입력값을 뷰어페이지에 출력할 때
function getNotiByid(id, callback) {
  connection.query(`SELECT * FROM kbnotice WHERE id=${id}`, (err,row) => {
      if(err) throw err;
      callback(row);
  })
}




module.exports = {
  getNoti, getNotiByid
}