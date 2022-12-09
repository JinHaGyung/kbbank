const express = require('express');
const router = express.Router();
const path = require('path');
const { title } = require('process');

router.get('/', (req, res)=>{ /* 메인페이지 */
  res.render('mainPage');
});

router.get('/login', (req, res)=>{ /* 로그인페이지 */
res.render('loginPage');
});

router.get('/join1', (req, res)=>{ /* 회원가입페이지1 */
res.render('join1Page');
});

router.get('/sub_noticeList', (req, res)=>{ /* 공지사항 리스트 */
res.render('sub_noticeList');
});

router.get('/notiConPage', (req, res)=>{ /* 공지사항 뷰어페이지 */
res.render('notiConPage');
});

router.get('/notice_write', (req, res)=>{ /* 공지사항 작성 */
  res.render('notice_write');
});


router.get('/notice_correct', (req, res)=>{ /* 공지사항 수정 */
  res.render('notice_correct');
});

router.get('/faqPage', (req, res)=>{ /* FAQ페이지 수정 */
  res.render('faqPage');
});


module.exports = router;