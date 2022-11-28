let menu = document.querySelector('.menu');
let gnb_bg = document.querySelector('#gnb_bg');
let lnb = document.querySelectorAll('.lnb');

// 마우스 오버 시 세부 메뉴 보이기
menu.addEventListener('mouseover',()=>{
    gnb_bg.style.height = '217px';
    for(i=0; i<lnb.length; i++) {
        lnb[i].style.height = '217px';
      }
})
menu.addEventListener('mouseleave',()=>{
    gnb_bg.style.height = '0px';
    for(i=0; i<lnb.length; i++) {
        lnb[i].style.height = '0px';
      }
})

