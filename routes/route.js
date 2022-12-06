const express = require('express');
const router = express.Router();
const path = require('path');
const { title } = require('process');

router.get('/', (req, res)=>{ /* 메인페이지 */
  res.render('mainPage');
});
router.get('/footer', (req, res)=>{ /* 픗터확인용 */
  res.render('footer');
});

router.get('/sub_noticeList', (req, res)=>{ /* 공지사항 리스트 */
  res.render('sub_noticeList');
});

module.exports = router;