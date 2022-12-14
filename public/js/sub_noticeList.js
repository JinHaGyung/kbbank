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