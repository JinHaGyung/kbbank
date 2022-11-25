// 스크롤 했을때의 swiper
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1200,
  mousewheel: true,
  allowTouchMove : false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 첫번째 섹션의 swiper
var swiper = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});