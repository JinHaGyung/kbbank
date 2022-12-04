let footer = document.querySelector('#footer')
if ( window.location.pathname == '/' ) {
  footer.style.display = 'none';
}

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