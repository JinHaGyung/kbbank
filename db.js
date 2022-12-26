const { query } = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '95052910',
  database : 'kbbank',
  dateStrings : 'date',
  multipleStatements: true
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//메인페이지 공지사항을 추출할 때
function mainPageNoti(callback) {
  connection.query(`SELECT * FROM kbnotice where date <= DATE_FORMAT(NOW(),'%Y-%m-%d') ORDER BY date desc LIMIT 4`, (err, rows) => {
    if (err) throw err;
    callback(rows);
  })
}
//리스트페이지 공지사항을 추출할 때
function getNoti(callback) {
  connection.query(`SELECT * FROM kbnotice where date <= DATE_FORMAT(NOW(),'%Y-%m-%d') ORDER BY date desc`, (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  })
}
//공지사항을 입력값을 뷰어페이지에 출력할 때
function getNotiByid(id, callback) {
  connection.query(`SELECT * FROM kbnotice WHERE id=${id}`, (err, row) => {
    if (err) throw err;
    callback(row);
  })
}
//공지사항 다음글 정보를 가져올 떄
function getNextNoti(id, callback) {
  connection.query(`SELECT * FROM kbnotice WHERE id=${id}`, (err,row) => {
      if(err) throw err;
      callback(row);
  })
}
// 공지사항 작성 후 DB로 보낼 때
function noticeWrite(cate, writer, title, cont, update, callback) {
  connection.query(`insert into kbnotice(cate,writer,title,date,cont) values('${cate}','${writer}','${title}','${update}','${cont}')`, (err) => {
    if (err) throw err;
    callback();
  })
}
//공지 수정(데이터추출)noticeWrite
function getNoticebyid(id, callback) {
  connection.query(`Select * FROM kbnotice where id =${id}`,
    (err, row) => {
      if (err) throw err
      callback(row);
    })
}
//공지수정(작성,보내기)
function NoticeCorr(id, cate, title, cont, callback) {
  connection.query(`UPDATE kbnotice set cate='${cate}',title='${title}',cont='${cont}' where id = ${id}`,
    (err) => {
      if (err) throw err;
      callback()
    })
}

//공지사항 삭제할 때
function deleteNoti(id, callback) {
  connection.query(`DELETE from kbnotice where id=${id}`, (err) => {
    if (err) throw err;
    callback();
  })
}

//공지사항 최신순 정렬
function getRecentNoti(callback) {
  connection.query(`SELECT * from kbnotice order by date desc`, (err, rows) => {
    if (err) throw err;
    callback(rows);
  })
}
//공지사항 과거순 정렬
function getPastNoti(callback) {
  connection.query(`SELECT * from kbnotice order by date asc`, (err, rows) => {
    if (err) throw err;
    callback(rows);
  })
}

// userinfo를 수정할때 (생성할때)
function insertUserInfo(user_name, user_birth, account_type, account_id, account_pw, user_id, user_pw, user_address, user_phoneNum, user_mail, callback) {
  connection.query(`INSERT INTO userinfo(user_name, user_birth, account_type, account_id, account_pw, user_id, user_pw, user_address, user_phoneNum, user_mail, create_time) VALUES('${user_name}', '${user_birth}', '${account_type}', '${account_id}', '${account_pw}', '${user_id}', '${user_pw}', '${user_address}', '${user_phoneNum}', '${user_mail}', NOW())`, (err) => {
    if (err) throw err;
    callback();
  });
};

// 로그인정보와 테이블 정보를 비교하는 함수
function loginCheck(login_id, login_pw, callback) {
  connection.query(`SELECT * FROM userinfo WHERE user_id='${login_id}' and user_pw='${login_pw}'`, (err, results) => {
    if (err) throw err;
    callback(results);
  })
}

// 아이디와 계좌 중복체크를 위해
function userinfoData(callback) {
  connection.query('SELECT * FROM userinfo ORDER BY user_id, account_id DESC', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
};

// 계좌조회 정보와 테이블 정보를 비교하는 함수
function accountCheck(user_name, user_birth, account_pw, callback) {
  connection.query(`SELECT * FROM userinfo WHERE user_name='${user_name}' and user_birth='${user_birth}' and account_pw='${account_pw}'`, (err, results) => {
    if (err) throw err;
    callback(results);
  })
}
//카드정보 추출할 때
function getCard(callback) {
  connection.query('SELECT * FROM card_table ORDER BY id desc',(err,rows) => {
    if (err) throw err;
    callback(rows);
  })
}

// 카드 상품 신청(보내기)
function cardapp(name,cardproduct,tellnum,payinfo,bankaccount,accountDay,postcode,address,detailAddress,transcard,oncelimit,daylimit,monthlimit,tellPay,gasPay,elPay,aptPay,callback) {
  connection.query(`insert into cardsub(name,cardproduct,tellnum,payinfo,bankaccount,accountDay,postcode,address,detailAddress,transcard,oncelimit,daylimit,monthlimit,tellpay,gaspay,elpay,aptpay,present,create_time) 
  values('${name}','${cardproduct}','${tellnum}','${payinfo}','${bankaccount}','${accountDay}','${postcode}','${address}','${detailAddress}','${transcard}','${oncelimit}','${daylimit}','${monthlimit}','${tellPay}','${gasPay}','${elPay}','${aptPay}','미발급',NOW())`,
    (err) => {
      if (err) throw err;
      callback()
    })
}
// 카드 상품 조회(리스트)
function getcardsub(callback) {
  connection.query(`SELECT * FROM cardsub order by id desc`, (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  })
}

//카드정보를 작성할 때
function insertCard(name,cate,img,info,benefit,content, callback) {
  connection.query(`INSERT INTO card_table(card_name, card_category, card_img, card_info, card_benefit, card_content) VALUES('${name}','${cate}','${img}','${info}','${benefit}','${content}')`,(err)=>{
    if (err) throw err;
    callback();
  })
}

//카드 정보를 가져올 때
function getCardByid(id, callback) {
  connection.query(`SELECT * FROM card_table WHERE id=${id}`,(err,row) => {
    if (err) throw err;
    callback(row);
  })
}

//카드상품 삭제할 때
function deleteCard(id, callback) {
  connection.query(`DELETE from card_table where id=${id}`,(err) => {
    if (err) throw err;
    callback();
  })
}

//카드상품 수정할 때
function updateCard(id, name,cate,img,info,benefit,content, callback) {
  connection.query(`UPDATE card_table SET card_name="${name}",card_category="${cate}",card_img="${img}", card_info="${info}",card_benefit="${benefit}",card_content="${content}" where id=${id}`, (err) => {
    if (err) throw err;
    callback();
  })
}


// 카드 상품 조회(상세)



module.exports = {
  getNoti,
  getNotiByid,
  noticeWrite,
  getNoticebyid,
  NoticeCorr,
  insertUserInfo,
  loginCheck,
  deleteNoti,
  getPastNoti,
  getRecentNoti,
  mainPageNoti,
  userinfoData,
  getNextNoti,
  getCard,
  insertCard,
  getCardByid,
  cardapp,
  getcardsub,
  deleteCard,
  updateCard,
  accountCheck
}