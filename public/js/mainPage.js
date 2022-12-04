// footer 중복방지
let footer = document.querySelector('#footer')
if ( window.location.pathname == '/' ) {
  footer.style.display = 'none';
}

// 세번째 섹션 도달했을때 footer 나오게 하기
window.addEventListener('wheel', () => {
  let footerPagination = document.getElementById('swiper-pagination-bullet4');
  let Swiper = document.querySelector('.swiper-vertical');
  console.log(footerPagination.classList[1])
  let section3 = document.getElementById('section3')
  let footer = document.getElementById('section4');
  if (footerPagination.classList[1] != undefined) {
    section3.style.top = 'calc(100vh - 400px)';
    footer.style.top = 'calc(100vh - 400px)';
  } else {
    section3.style.top = 0;
    footer.style.top = 0;
  }
});

// 왼쪽 내비 관련 스크립트
let swiperBtn0 = document.querySelector('#swiper-pagination-bullet0>.navTxt');
let swiperBtn1 = document.querySelector('#swiper-pagination-bullet1>.navTxt');
let swiperBtn2 = document.querySelector('#swiper-pagination-bullet2>.navTxt');
let swiperBtn3 = document.querySelector('#swiper-pagination-bullet3>.navTxt');

swiperBtn0.innerText = 'With KB';
swiperBtn1.innerText = 'KB저축은행 솔루션';
swiperBtn2.innerText = 'KB  Info';
swiperBtn3.innerText = '저축은행 공지사항';