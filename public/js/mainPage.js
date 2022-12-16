// footer 중복방지
let footer = document.querySelector('#footer')
if (window.location.pathname == '/') {
  footer.style.display = 'none';
}

//사이트맵 헤더 삭제
let header = document.querySelector('#header')
if (window.location.pathname == '/siteMapPage') {
  header.style.display = 'none';
}
if (window.location.pathname == '/siteMapPage') {
  footer.style.display = 'none';
}

// 세번째 섹션 도달했을때 footer 나오게 하기
window.addEventListener('wheel', () => {
  let footerPagination = document.getElementById('swiper-pagination-bullet4');
  let section3 = document.getElementById('section3');
  let footer = document.getElementById('section4');
  if (footerPagination.classList[1] != undefined) {
    section3.style.top = 'calc(100vh - 400px)';
    footer.style.top = 'calc(100vh - 400px)';
  } else {
    section3.style.top = 0;
    footer.style.top = 0;
  }
});

// footer가 나왔을때 leftNav클릭하면 섹션 원위치로
let leftNav = document.querySelector('.swiper-pagination-vertical');
leftNav.addEventListener('click',()=>{
  let section3 = document.getElementById('section3');
  let footer = document.getElementById('section4');
  section3.style.top = 0;
  footer.style.top = 0;
})

