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

//공지사항 삭제할 때
function deleteNoti(id, callback) {
  connection.query(`DELETE from kbnotice where id=${id}`, (err) => {
    if(err) throw err;
    callback();
  })
}

//공지사항 최신순 정렬
function getRecentNoti(callback) {
  connection.query(`SELECT * from kbnotice order by date desc`, (err, rows) => {
    if(err) throw err;
    callback(rows);
  })
}
//공지사항 과거순 정렬
function getPastNoti(callback) {
  connection.query(`SELECT * from kbnotice order by date asc`, (err, rows) => {
    if(err) throw err;
    callback(rows);
  })
}

// userinfo를 수정할때 (생성할때)
function insertUserInfo(user_name, user_birth, account_id, account_pw, user_id, user_pw, user_address, user_phoneNum, user_mail, callback){
  connection.query(`INSERT INTO userinfo(user_name, user_birth, account_id, account_pw, user_id, user_pw, user_address, user_phoneNum, user_mail) VALUES('${user_name}', '${user_birth}', '${account_id}', '${account_pw}', '${user_id}', '${user_pw}', '${user_address}', '${user_phoneNum}', '${user_mail}')`, (err)=>{
    if(err) throw err;
    callback();
  });
};

// 로그인정보와 테이블 정보를 비교하는 함수
function loginCheck(login_id, login_pw, callback){
  connection.query(`SELECT * FROM userinfo WHERE user_id='${login_id}' and user_pw='${login_pw}'`, (err, results)=>{
    if(err) throw err;
    callback(results);
  })
}

module.exports = {
  getNoti, getNotiByid,noticeWrite,getNoticebyid,NoticeCorr,insertUserInfo,loginCheck,deleteNoti, getPastNoti, getRecentNoti
}