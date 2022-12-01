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

// 첫번째 섹션의 swiper
var swiper = new Swiper(".mySwiper1", {
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


// 두번째 섹션의 swiper