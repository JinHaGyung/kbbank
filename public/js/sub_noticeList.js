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


// 예약업로드 보이기
// 오늘 날짜 받기
let today = new Date();
let year = today.getFullYear(); 
let month = today.getMonth() + 1
let date = today.getDate();
let listToday = year +"-" + month+"-"+date

const listupdate = document.querySelectorAll(".updateDate")
const noticeList = document.querySelectorAll(".displystyle");
for(let i = 0; i<listupdate.length;i++){
    if(listupdate[i].innerHTML <= listToday){
        noticeList[i].classList.remove("displystyle")
        noticeList[i].classList.add("ListNum")
    }
}

// 게시글 번호 매기기
let num = document.querySelectorAll(".num");
let numArray = []

for (let i = num.length; i>0; i--){
    numArray.push(i)
}

for(let j = 0; j < numArray.length; j++){
    num[j].innerHTML = `${numArray[j]}`
}

//총 게시물 수 구하기
let listNum = document.querySelectorAll(".ListNum");
// let list_tt = document.querySelector('#list_tt');
list_tt.innerText += `총 ${listNum.length}건, `;