const express = require('express');
const router = express.Router();
const path = require('path');
const { title } = require('process');
const db = require('./../db.js');

router.get('/', (req, res)=>{ /* 메인페이지 */
  res.render('mainPage');
});

router.get('/login', (req, res)=>{ /* 로그인페이지 */
res.render('loginPage');
});

router.get('/join1', (req, res)=>{ /* 회원가입페이지1 */
res.render('join1Page');
});

router.get('/join2', (req, res)=>{ /* 회원가입페이지2 */
res.render('join2Page');
});

router.get('/sub_noticeList', (req, res)=>{ /* 공지사항 리스트 */
db.getNoti((rows)=>{
  res.render('sub_noticeList',{rows:rows});
 })
});

router.get('/notiConPage', (req, res)=>{ /* 공지사항 뷰어페이지 */
let id = req.query.id;
console.log(id);

db.getNotiByid(id, (row)=>{
res.render('notiConPage', {row:row[0]});
})
});

router.get('/notice_write', (req, res)=>{ /* 공지사항 작성페이지 */
    res.render('notice_write');
});

router.post('/noticeW', (req, res)=>{ /* 공지사항 작성 */
  let param = JSON.parse(JSON.stringify(req.body));
  let cate = param['radio'];
  let writer = param['write'];
  let title = param['title'];
  let cont = param['write_cont'];
  db.noticeWrite(cate,writer,title,cont,()=>{
    res.redirect('/sub_noticeList')
  })
});
router.get('/notUp', (req,res)=>{/*공지 수정(데이터추출)*/
  let id = req.query.id;
  db.getNoticebyid(id,(row) =>{
    res.render('notice_correct',{row: row[0]})
  })
})

router.post('/Not_corr',(req,res)=>{/*공지 수정(보내기) */
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let cate = param['radio'];
  let title = param['title'];
  let cont = param['write_cont'];
  db.NoticeCorr(id,cate,title,cont,()=>{
    res.redirect('/sub_noticeList')
  })
})


router.get('/notice_correct', (req, res)=>{ /* 공지사항 수정 */
  res.render('notice_correct');
});

router.get('/faqPage', (req, res)=>{ /* FAQ페이지 수정 */
  res.render('faqPage');
});

router.get('/calculator', (req, res)=>{ /* 계산기페이지 */
  res.render('calculatorPage');
})
router.get('/productEplus', (req, res)=>{ /* KB e-plus정기예금 */
  res.render('productEplus');
})
router.get('/productKiwi', (req, res)=>{ /* kiwi신용대출 */
  res.render('productKiwi');
})

module.exports = router;