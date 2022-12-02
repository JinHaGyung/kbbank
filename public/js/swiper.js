// 스크롤 했을때의 swiper
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 800,
  mousewheel: true,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 첫번째 섹션(mainSlide)의 swiper
var swiper1 = new Swiper(".mySwiper1", {
  // spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
    renderBullet: function (index, className) {
      // return '<span class="' +  className + '">' + (index + 1) + "</span>";
      return `<span class=${className}> 0${index + 1} </span>`
    },
  },
  // autoplay: {
  //   delay: 5000,
  //   // disableOnInteraction: false,
  // },
  allowTouchMove: false,
});

// 세번째 섹션(kbinfo)의 swiper
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  loopAdditionalSlides: 1,
  loopFillGroupWithBlank: true,
  allowTouchMove: false,

  navigation: {
    nextEl: ".kbinfo1_rightArrow",
    prevEl: ".kbinfo1_leftArrow",
  },
});

// var swiper = new Swiper(".mySwiper3", {
//   slidesPerView: 2,
//   slidesPerGroup: 1,
//   loop: false,
//   loopFillGroupWithBlank: true,
//   navigation: {
//     nextEl: ".kbinfo2_leftArrow",
//     prevEl: ".kbinfo2_rightArrow",
//   },
// });