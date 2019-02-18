// html문서가 모두 로드되고 나서 실행하도록 하는 코드. 같은 의미의 코드로는 
// $(document).ready(function(){})
// 그외에 document에 DOM요소가 다 로드되었을때 이벤트를 직접 입력하는 방법이 있습니다.
$(function(){
    // 조작할 table의 tbody를 미리 가져옵니다.
    var __tbody = $('#tblPeople').find('tbody');
    // 복사해서 사용할 tr을 미리 만들어두고, 클론해서 사용하기위해 목업 tr을 가져옵니다. 
    var __rowMockup = $('.mockup').find('tr');

    // jquery를 이용해 비동기 통신인 ajax를 실행합니다. 
    $.ajax({
        // 요청을 보낼 주소입니다.
        url : 'http://syunoti.cafe24app.com/API/boards/example',
        // 요청을 보낼 HTTP의 형태입니다. 주로 GET 혹은 POST를 사용합니다.
        method : 'get'
    })
    // ajax 요청이 완료되고 나면 실행되는 부분입니다. 
    // 이러한 용법을 promise라고 합니다.
    // then함수에는 첫번째 파라미터에는 성공했을 때의 함수를
    // 두번째 파라미터에는 실패했을 경우의 함수를 익명함수로 만들어줍니다. 
    .then(function(res){
        // 성공했을 때의 함수입니다. 
        // reponse의 body에 들어있는 정보를 포함합니다. 
        // 본 데이터에는 res바디안에는 status와 data가 들어있습니다. 

        // 바디에 자식 요소가 하나라도 있는 경우에는
        // 미리 삭제한다.        
        if(__tbody.children().length > 0){
            __tbody.children().remove();
        }
        
        // data 객체에 들어있는 요소들을 탐색합니다. 
        // 각 요소에서 필요한 정보를 가져와 mockup에 채워넣고 
        // tbody에 내용을 채워넣습니다.
        for(var i = 0 ; i < res.data.length ; i++){
            let row = __rowMockup.clone();
            let person = res.data[i];
            row.find('.seq').text(person.seq);
            row.find('.name').text(person.name);
            row.find('.hp').text(person.hp);
            row.find('.email').text(person.mail);
            row.find('.grade').text(person.grade);
            row.find('.age').text(person.age);
            __tbody.append(row);
        }
    } , function(){
        console.log('ERROR!!');
    })
});