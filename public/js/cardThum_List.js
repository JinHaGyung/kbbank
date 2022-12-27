//검색 구현
function filter(){

    var value, name, item, i;

    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("cardItem");

    for(i=0;i<item.length;i++){
      name = item[i].getElementsByClassName("cardName");
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        item[i].style.display = "flex";
      }else{
        item[i].style.display = "none";
      }
    }
  }


//카드상품 총 게시물 수
  let cardThum_tol = document.querySelector('#cardThum_tol');
  let card_li = document.getElementsByClassName('card_li');
  cardThum_tol.innerText = card_li.length;