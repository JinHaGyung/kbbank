// 유효성 검사

function card_ck(e){ 
  let name= document.getElementById('name'); 
  let tellnum = document.getElementById('tellnum'); 
  let bankAccount = document.getElementById('bankAccount'); 
  let address = document.getElementById('sample6_address'); 
  let pay = document.querySelector(".pay");
  let cardlimit = document.querySelectorAll(".cardlimit");

  // 숫자만 입력
  let num_partten = /[0-9]/;

  if (name.value==''){
    alert("이름은 비워둘 수 없습니다.");
    name.focus();
    e.preventDefault()
    return false
  }
  if (tellnum.value==''){
    alert("연락처를 비워둘 수 없습니다.");
    tellnum.focus();
    e.preventDefault()
    return false
  }
  if(pay.value =="결제기관"){
    alert("결제기관을 선택해주세요.");
    pay.focus();
    e.preventDefault()
    return false
  }
  if (bankAccount.value==''){
    alert("결제 계좌를 입력해주세요");
    bankAccount.focus();
    e.preventDefault()
    return false
  }
  if (address.value==''){
    alert("수령주소를 입력해주세요");
    address.focus();
    e.preventDefault()
    return false
  }


    //pattern_OOO.test(str) => true면 해당 문자 있음, false면 해당 문자 없음!
  if( (pattern_num.test(str)) && !(pattern_eng.test(str)) && !(pattern_spc.test(str)) && !(pattern_kor.test(str)) ){
    return true;
  }else{
    alert("숫자만 입력 가능합니다.");
    return false;
  }

} 
const submit = document.querySelector("input[type=submit]");
submit.addEventListener("click",card_ck)

// 결제일 지정 선택시 활성화
let accountDay = document.querySelectorAll('input[name="account_day"]');
let accountSelect = document.querySelector("#accountSelect");

for(let i = 0; i<accountDay.length; i++){
  accountDay[i].addEventListener('click', ()=>{
    if(accountDay[i].value == "") {
      accountSelect.disabled = false;
      accountSelect.addEventListener("change",()=>{
        accountDay[i].setAttribute('value',accountSelect.value);
      })
    }
    else{
      accountSelect.disabled = true;
    }
  });
}