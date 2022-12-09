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
// const uploadBtn = document.querySelectorAll('input[name="upload_radio"]');

// for(let i = 0; i<uploadBtn.length;i++){
//   if(uploadBtn[i].checked == 'pload_reserv'){
//     console.log("123")
//   }
// }

var uploadBtn = document.getElementsByName('upload_radio');

for (let i = 0; i< uploadBtn.length; i++){
  if(uploadBtn[i].checked){
    console.log(uploadBtn.values);
  }
}

// 예약 업로드 선택시 예약된 시간에 업로드되기
