let tabAllbtn = document.querySelectorAll('.tab_link');
let tabBtn1 = document.querySelector('.tabBtn1');
let tabBtn2 = document.querySelector('.tabBtn2');
let tabBtn3 = document.querySelector('.tabBtn3');

let tabAllcon = document.querySelectorAll('.calcul_inner>div');
let tab1Con = document.querySelector('.tab1');
let tab2Con = document.querySelector('.tab2');
let tab3Con = document.querySelector('.tab3');

tabBtn1.addEventListener('click', () => {
  tabAllcon.forEach(div =>{
    div.classList.remove('on');
  });
  tabAllbtn.forEach(li =>{
    li.classList.remove('on');
  });
  tabBtn1.classList.add('on');
  tab1Con.classList.add('on');
})

tabBtn2.addEventListener('click', () => {
  tabAllcon.forEach(div =>{
    div.classList.remove('on');
  });
  tabAllbtn.forEach(li =>{
    li.classList.remove('on');
  });
  tabBtn2.classList.add('on');
  tab2Con.classList.add('on');
})

tabBtn3.addEventListener('click', () => {
  tabAllcon.forEach(div =>{
    div.classList.remove('on');
  });
  tabAllbtn.forEach(li =>{
    li.classList.remove('on');
  });
  tabBtn3.classList.add('on');
  tab3Con.classList.add('on');
})