console.log("외부 자바스크립트가 로드됐습니다");
var selected = -1;
function select(obj){
    // square라는 클래스를 가진 모든 요소들에게서 
    // square-select 클래스를 삭제한다.
    $('.square').removeClass('square-select');

    // 현재 요소를 객체로 가지고 있는다.
    var currentElement = $(obj);
    // selected라는 id를 갖는 요소를 미리 가지고 있는다.
    var txtSelected = $('#selected');
    // 현재 클릭한 요소의 data-square-eq라는 속성의 값을 가져와 비교한다.
    if(currentElement.attr('data-square-eq') === selected){
        selected = -1;
        txtSelected.text(selected);
    }
    else{
        selected = currentElement.attr('data-square-eq');
        txtSelected.text(selected);
        currentElement.addClass("square-select");
    }
}