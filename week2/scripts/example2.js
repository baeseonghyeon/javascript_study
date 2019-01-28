console.log("외부 자바스크립트가 로드됐습니다");
var selected = -1;
function select(obj){
    // 현재 요소를 객체로 가지고 있는다.
    var currentElems = document.getElementsByClassName("square");
    // 현재 클릭한 요소의 data-square-eq라는 속성의 값
    var currentIdx = obj.getAttribute("data-square-eq");
    // selected라는 id를 갖는 요소를 미리 가지고 있는다.
    var txtSelected = document.getElementById("selected");
    
    // square라는 클래스를 가진 모든 요소들에게서 
    // square-select 클래스를 삭제한다.
    for(var i = 0 ; i < currentElems.length; i++){
        currentElems[i].classList.remove("square-select");
    }

    // 스크립트의 selected에 저장된 값과 현재 data-square-eq의 값이 같으면
    // (이미 선택되어 있는 박스라면) 선택 해제 처리한다.  
    if(selected === currentIdx){
        selected = -1;
        txtSelected.innerText = -1;    
    }
    // 값이 같지 않으면
    // 현재 객체를 선택 처리한다.(square-select 클래스를 추가해준다.)
    else{
        selected = currentIdx;
        obj.classList.add("square-select");
        txtSelected.innerText = selected;    
    }
    
}