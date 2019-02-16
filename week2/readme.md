자바스크립트 2주차 입니다.
DOM 요소를 조작하기 위한 가장 기초적인 부분을 첫 주차에 확인해봤습니다. 
2주차에는 본격적으로 실전에 사용할 수 있는 각종 이벤트들과 이벤트 객체를 다룹니다. 
이벤트를 이용하면 실제 서비스에 가까운, 다양한 기능들을 구현할 수 있습니다. 
그 이후에는 스크립트를 파일로 분리하고, 외부 라이브러리를 사용하는 방법을 알아봅니다. 
(jQuery를 먼저 다루게 될 예정입니다.)

# 1. event와 event객체 

모든 html 요소에는 다양한 이벤트를 할당해줄 수 있습니다. 여기서 이벤트란 클릭,드래그,마우스 hover등의 
사용자가 dom요소에 할 수 있는 다양한 활동 자체를 이야기합니다. 오늘은 간단한 몇가지 이벤트만 다뤄봅니다. 

## 1.1. on-

DOM요소들은 다양한 이벤트를 갖고 보통 'on-'으로 시작하는 속성명을 갖습니다. 해당 이벤트 들에는 함수실행부를 작성해주는데, 사실상 속성값은 자동으로 실행되는 무명함수라고 볼 수 있기 때문입니다. 코드로 확인해봅시다.

```html
<button type='button' id='btn'/>
<script>
  // click이벤트 주기
  document.getElementById('btn').addEventListener('click' , function(event){
     // 클릭이벤트가 실행됐을 때 실행되는 부분
  });
</script>
```

속성의 값에 들어가는 부분은 주석으로 적어둔 '클릭 이벤트가 실행됐을 때 실행되는 부분'의 한 줄이라고 생각할 수 있습니다. 그렇기 때문에, 여기에 `return false;`한다면 이벤트가 일어나지 않을 수도 있습니다.

또한 선언된 함수를 실행할 수 도 있으며, 'this'로 **미리 선언한 함수에 DOM요소를 객체로 넘겨주거나** 'event'라는 이름으로 **선언한 함수에 이벤트 자체를 넘겨 줄 수도** 있습니다. 

## 1.2. 이벤트들 

다양한 이벤트들을 할당할 수 있지만 주로 사용하는 이벤트는 아래와 같습니다. 

### 1.2.1. onclick
객체를 클릭했을 때 실행되는 이벤트 속성명입니다. 1주차 example2에서 확인할 수 있습니다. 

### 1.2.2. onkeydown / onkeypress / onkeyup
input,textarea등의 태그에 주로 사용되는 키보드 관련 이벤트 속성입니다. (꼭 input,textarea에만 쓸 필요는 없습니다.)

키보드를 클릭했을 때 각각 onkeydown->onkeypress->onkeyup의 순서로 실행됩니다. 

onkeydown은 모든 키를 눌렀을때 실행됩니다. shift, alt, control, capslock 등의 키도 모두 인식합니다. 단 한영변환,한자 등의 특수키는 인식못합니다. 

onkeypress는 실제로 글자가 써질때 실행됩니다. shift, enter 같은 키는 인식하지 못합니다. 특히 onkeypress에 `return false;`를 넘겨주면 키 입력을 막을 수 있습니다.

onkeyup은 모든 키를 눌렀다가 뗐을때 실행됩니다. 

### onmouseover / onmouseout

해당 객체에 마우스가 각각 올라오고 벗어 났을 때 실행되는 이벤트입니다. 간단한 UI개발에 클래스를 추가하고 삭제하는 정도는 CSS의 :hover 속성으로 대체되고 있습니다. 

# 2. 파일 분리 

지금까지 DOM요소를 다루는 다양한 방법을 봤습니다. 이런 기능들을 구현하면서 작성되는 스크립트들은 실제 서비스를 만들면 점점 더 길고 복잡해집니다. 이런 길고 복잡한 내용들을 html 파일 안에 포함하는 일은 효율적인 행동이 아닙니다. 

되도록 자바스크립트,html,css파일은 따로 분리하는 것이 각 파일의 관리에 용이하기 때문입니다. 

자바스크립트 파일은 'js'라는 확장자를 갖습니다. <script>태그에 들어갔던 내용을 js파일안에 작성하게 됩니다.
파일을 불러올 때는 아래와 같이 작성합니다. 

```html
<script type='text/javascript' src='주소'></script>
```

'link'태그와 다르게 script태그는 'src'라는 속성으로 주소를 작성합니다. 주소의 작성법은 기존의 link와 동일합니다. 

# 3. 외부 라이브러리 사용하기 

외부 라이브러리의 사용은 위의 '파일 분리하기'에서 작성한 코드의 'src'속성에 외부 라이브러리가 존재하는 Url을 입력하면됩니다. 주로 외부 라이브러리를 제공하는 사이트들은 본인들의 스크립트를 사용하기 위한 script코드 블록을 적어두는게 보통 입니다. [jQuery 예제](https://jquery.com/download/#other-cdns)

# 4. jQuery 

이제 외부 라이브러리를 사용하는 법을 알았으니, 가장 많이 사용되는 jQuery를 간단하게 알아봅시다. jQuery는 html를 조작하는데 필요한 다양한 함수들을 사용하기 간편하게 만들어둔 라이브러리 입니다. 요소를 탐색하거나, 클래스를 삭제 / 추가, 속성을 삭제 추가 하는 등의 기능을 좀 더 손 쉽게 작업할 수 있습니다. 

현재에는 많이 사용률이 줄어들고 있지만, 아직도 실무에서 많이 사용하고 있으므로 기본만 간단하게 짚고 넘어갈 예정입니다. 

## 4.1. selector

css애서 요소를 특정 짓거나 그루핑하는 방법을 떠올려봅시다. 보통 아래와 같았습니다. 

```css
.box { display:none; }  /* 'box'라는 'class'를 가진 요소에만 속성 적용 */
#btn { color:#000; } /* 'btn'이라는 'id'를 가진 요소에만 속성 적용 */
...
```

jQuery는 자바스크립트의 'getElementById'등의 요소를 가져오는 기능을 이 css의 셀렉터로 구현해두었습니다. 
jQuery 스크립트에는 '$' 혹은 'jQuery'라는 객체가 전역으로 선언되어있고 그 객체에 셀렉터를 작성하면 jQuery 형식의 객체로 반환됩니다. 사용 예를 봅시다. 

```html
<p class='box' id='box'></p>
<script>
  // jQuery가 로드되어있다고 가정합니다. 
  // 1. jQuery객체를 이용해 Box클래스 내용 바꾸기 
  jQuery('.box').text('내용');
  // 2. $객체를 이용해 box id 내용 바꾸기
  $('#box').text('내용');
</script>
```

위 코드의 괄호안에 들어가는 스트링 부분이 css의 셀렉터와 동일한 형태를 갖습니다. id를 기준으로 선택할때는 '#'접두사를, class로 선택할때는 '.'접두사를 사용합니다. 

대다수의 자바스크립트 함수는 jQuery로 대응될 수 있습니다. 
주로 사용되는 함수들을 대치한 내용을 아래에 정리해둡니다. 

```javascript
// 1. 요소 가져오기 (대표적으로 id만 작성합니다)
// 1.1.javascript
document.getElementById('id'); 
// 1.2. jQuery
$('#id');

// 2. 속성 가져오기 / 추가하기 
// 2.1. javascript
document.getElementById('id').getAttribute('data-attr');
document.getElementById('id').setAttribute('data-attr' , 'value');
// 2.2. jQuery
$('#id').attr('data-attr');
$('#id').attr('data-attr','value');

// 3. 클래스 추가 / 삭제하기
// 3.1. javascript
document.getElementById('id').classList.add('class');
document.getElementById('id').classList.remove('class');
// 3.2. jQuery
$('#id').addClass('class');
$('#id').removeClass('class');

// 4. 요소 생성하기
// 4.1. javascript
document.createElement('p')
// 4.2. jQuery
// jQuery 셀렉터 안에 셀렉터가 아니라 html형태의 텍스트를 삽입하면 해당 html을 생성해 jQuery요소로 
// 갖고있게됩니다. 
$('<p></p>');
```

위와 같이 대부분의 Javascript 기능들은 jQuery로 대체할 수 있으니, 기존의 예제를 jQuery로 작성해보면 
쉽게 jQuery에 익숙해 질 수 있습니다. 모든 함수를 알 필요는 없으며, 필요한 기능은 [api 문서](https://api.jquery.com/)를 참고하시면됩니다. 

javascript는 [w3schools](https://www.w3schools.com/jsref/)혹은 [mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript)을 통해서 각 객체가 가지는 함수등을 알아볼 수 있습니다. 

html을 조작하는 기능은 필요할 때마다 검색해 알아보는 것이 좋고 모든 함수들을 알필요는 없습니다. 
api문서를 적극 활용하도록합시다. 

다음주부터는 본격적으로 자바스크립트의 문법을 알아볼 예정입니다. 고생많으셨습니다.


## 수정사항

#### practice1.html의 문제 2번 영소문자 입력 막기 문제

onkeydown과 onkeypress에서는 한글을 확인할 수 없는 문제가 있었습니다. 이벤트 자체에서 한글을 구분할 수 없는 것으로 보입니다. 
input에서 한글입력을 막는 방법은 여러 방법이있습니다. 

css에서 imeMode 속성을 'disabled'로 변경해주면 한글 혹은 그 이외의 문자의 입력을 막을 수 있습니다. 
영소/대문자 혹은 숫자는 별도로 스크립트로 막아주어야 합니다. 그래서 스크립트로 막는 방법은 아래와 같은 방법을 사용하기로 하였습니다.

```html
<input type='text' onkeyup='filter(event,this)'/>
<script>
  function filter(evt , obj){
    // 영소문자 이외의 문자를 판별하는 정규표현식을 사용합니다. 
    var notSmallEng = /[^a-z]/g;
    // 아래 코드는
    // 해당 정규표현식으로 obj.value에 들어있는 string을 검사(test)하는 함수 실행부입니다. 
    // true or false로 결과를 가져옵니다
    if(notSmallEng.test(obj.value)){
      alert('영소문자 이외의 문자가 입력 되었습니다!');
      obj.value = obj.value.replace(notSmallEng , '');
      // obj.value에 들어있는 string중에서 
      // 소문자가 아닌 문자를 모두 검색해, 지워버립니다. 
      // 즉 원천적으로 입력을 막는 것이 아닌, 입력한 값에 영소문자 이외의 문자가 들어있는 경우 
      // 그 문자들을 모두 삭제하는 방식으로 진행합니다. 
    }
  }
</script>
```

관련된 내용은 주석으로 표기해두었으니 확인 부탁드립니다. 정규표현식은 외우지 않고 경우에 따라 필요한 것만 검색하도록 합시다.
저 중 문자열에 포함되어있는 replace함수는 파라미터를 두 가지 받습니다. 해당 문자열 객체에서, 첫번째 인자로 받은 문자 혹은 문자열을 
탐색하여 두번째 문자열로 치환하는 함수입니다.

#### 정규표현식 (Regular Expression)

정규 표현식은 위의 경우와 같이 문자열에서 특수한 문자열을 골라내기 위해 사용하는 식입니다. 
정규 표현식은 언어에 국한 받지 않는 독자적인 표기법으로 문자열에 관련된 부분에 한해서는 어디서도 사용 가능하니 사용법을 알고 있으면 
많이 도움될 것입니다. 정규 표현식으로 문자열을 검증하는 경우는 보통 아래와 같습니다. 

- 영문자 혹은 숫자 혹은 한글 각각 입력을 막아야 하는 경우 
- 이메일만 입력받아야되는 경우 
- 전화번호만 입력받아야되는 경우 
- 특별한 조합의 패스워드를 입력받아야 하는 경우 

위와 같은 경우에 많이 사용되며 이미 구현되어 있는 정규 표현식이 많이 있으니 참고하면 좋습니다. 
정규 표현식의 예제는 아래와 같습니다

```javascript
var regexSmallEng = /[a-z]/g;
// 영소문자를 검색하는 정규표현식입니다. 
// '/'문자로 앞뒤를 감싸고 작성을 하면 정규 표현식으로 입력합니다. 문자열이 아니라 코드로 입력해야하는 것을 주의합니다. 
// '[',']'로 감싸여 있는 부분은 해당 그룹 안에 포함되는 어느 글자라도 검색하겠다는 의미입니다. 
// '-'는 일련의 연속되는 문자열이라는 표기입니다. 
// a-z는 abc...를 0-9는 0...9를 나타냅니다. 한글의 경우는 [ㄱ-ㅎ가-힣]과 같은 형태로 표기합니다.

regexSmallEng.test("abc");
// "abc"라는 문자열을 regexSmallEng라는 정규 표현식으로 확인하는 과정입니다. 
// 위 경우에는 영소문자로만 이루어져있으므로, true를 반환하게 됩니다. 
```

정규표현식의 다양한 레퍼런스들과 표기법이 있는 링크를 후에 첨부하오니 더 궁금하시다면 확인해보시면 좋겠습니다. 

[Regexr](https://regexr.com/)
