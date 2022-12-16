// 작성 공란 검사
function notice_ck(){ 
  var writeWriter= document.getElementById('write_writer'); 
  var writeTitle = document.getElementById('write_title'); 
  var writeCont = document.getElementById('write_cont'); 

  if (writeWriter.value==''){
    alert("작성자 이름은 비워둘 수 없습니다.");
    writeWriter.focus();
    return false;
  }
  if (writeTitle.value==''){
    alert("제목을 비워둘 수 없습니다.");
    writeTitle.focus();
    return false;
  }
  if (writeCont.value==''){
    alert("내용을 비워둘 수 없습니다.");
    writeCont.focus();
    return false;
  }
} 

// 예약업로드 선택시 date 활성화
let uploadBtn = document.getElementsByName('upload_radio');
let uploadDate = document.getElementById('upload_date');

for(let i = 0; i<uploadBtn.length; i++){
  uploadBtn[i].addEventListener('click', ()=>{
    if(uploadBtn[i].value == "upload_reserv") {
      uploadDate.disabled = false;
    } 
    else{
      uploadDate.disabled = true;
    }
  });
}

//예약업로드 일자 제어하기

let today = new Date();
let year = today.getFullYear(); 
let month = today.getMonth() + 1
let date = today.getDate();

uploadDate.setAttribute("min", `${year}-`+`${month}-`+`${date+1}`);
uploadDate.setAttribute("max", `${year}-`+`${month}-`+`${date+3}`);

//예약업로드 선택시 값 보내기



