// TOP버튼
let topBtn = document.querySelector('#topBtn');

function scrollBtn() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop >300) {
        topBtn.classList.add('topActive');
    } else {
        topBtn.classList.remove('topActive');
    }
}

window.onscroll = function() {
    scrollBtn();
}


topBtn.addEventListener('click',() => {
    window.scrollTo({top : 0, behavior: 'smooth'});
})


//총 게시물 수 구하기
const listTable = document.querySelector('.listTable');
const listTbody = listTable.tBodies[0].rows.length;
let list_tt = document.querySelector('#list_tt');

list_tt.innerText += `총 ${listTbody}건, `;

// 게시글 번호 매기기
let listNum = document.querySelectorAll(".ListNum");
let numArray = []
for (let i = listNum.length; i>0; i--){
    numArray.push(i)
}
for(let num = 0; num < numArray.length; num++){
    listNum[num].innerHTML = `${numArray[num]}`
}



//최신순 과거순 토글
let notiTorder = document.getElementsByClassName('notiTorder');

for(i=0; i<notiTorder.length; i++) {
    notiTorder[i].addEventListener('click', function() {
        this.classList.toggle('notiTorder_active');
    });
}