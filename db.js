var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
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
// 공지사항 작성 후 DB로 보낼 때
function noticeWrite(cate,writer,title,cont,callback){
  connection.query(`insert into kbnotice(cate,writer,title,cont) values('${cate}','${writer}','${title}','${cont}')`, (err)=>{
    if (err) throw err;
    callback();
  })
}
  //공지 수정(데이터추출)
function getNoticebyid(id,callback){ 
  connection.query(`Select * FROM kbnotice where id =${id}`, 
  (err,row)=>
  {if (err) throw err
  callback(row);})
}
//공지수정(작성,보내기)
function NoticeCorr(id,cate,title,cont,callback){
  connection.query(`UPDATE kbnotice set cate='${cate}',title='${title}',cont='${cont}' where id = ${id}`,
  (err) => {
    if (err) throw err;
    callback()
  })
}

module.exports = {
  getNoti, getNotiByid,noticeWrite,getNoticebyid,NoticeCorr,
}