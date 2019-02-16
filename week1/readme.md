자바스크립트 스터디가 시작됐습니다!
앞으로 스터디에서는 javascript로 HTML을 조작하는 방법과 자바스크립트 파일의 관리, 외부 라이브러리의 사용
그리고 비동기통신과 문법까지 일반적으로 홈페이지 개발을 진행하면서 필요한 요소들을 간단하게 살펴볼 예정입니다. 

모든 수업은 주로 예제에 대한 설명을 거쳐 준비된 실습 문제를 직접 풀어보는 식으로 진행됩니다. 
모든 실습 문제는 **(검색을 포함해) 본인이 할 수 있는 최대한 풀이해본 후**에 종료하는 것을 권장드립니다. 
풀이를 최대한 해보라는 이야기는 완성을 하라는 이야기와 같지는 않습니다. 
최대한 풀어본 후 모르는 점이있다면 차근차근 설명해드릴테니 실습은 부담갖지 않고 임하셔도 되겠습니다. 
만약 바쁘시거나 다른 업무가 있으시다면 안해오셔도 괜찮습니다. 스터디 시간에 모두 설명을 해드립니다. 

## 1. Javascript?

자바스크립트는 다들 HTML을 조작하기 위한 스크립트 언어라고 많이 알고 있습니다. 하지만 현대에 들어서 
환경이 점점 좋아지고 자바스크립트가 할 수 있는 일이 무궁무진해지면서 그 말도 무색해지기에 이르고 있습니다. 
자바스크립트가 할 수 있는 일을 이야기 하기전에 간단하게 용어를 짚어보고 넘어가보자 합니다. 

### 1.1. frontend ? backend?

웹 개발을 진행하다 보면 프론트엔드(front-end)와 백엔드(back-end)라는 용어가 자주 등장합니다. 
이 용어는 추후에 본인의 개발 진로를 정하는데도 언급되는 내용이니 짚고 넘어가는 것이 좋을 것입니다. 

#### 1.1.1. front-end

프론트엔드는 HTML을 작성하거나 CSS를 이용해 HTML을 꾸미고, 기획에 명시된 움직임을 구현하거나 로그인을 
처리하는 등 사용자가 웹에 접속했을 때 직접 적으로 맞닥들이는 부분을 이야기합니다. 
자바스크립트는 HTML을 조작하기 위해 태어난 스크립트 언어이므로 기본적으로 front-end에서 주력으로 사용되는 
언어라고 할 수 있습니다. front-end에서 작동하는 스크립트 언어는 브라우저 안에서만 작동해야 한다는 제약을 
갖고 있습니다. 

++ HTML + CSS을 작성하는 직업을 '퍼블리셔(Publisher)'라고 불렀습니다. 이는 그림을 HTML+CSS로 옮겨오는 작업만
진행하는 사람을 의미하고 프론트엔드 개발자는 그외에 개발적인 부분을 담당하는 것으로 나뉘었지만 최근에는 새로운 
라이브러리들이 등장하면서 퍼블리셔와 프론트엔드 개발자의 경계가 많이 허물어지고 있는 실정입니다.

#### 1.1.2. back-end

백엔드는 웹 개발에 있어 화면에 보이지 않는 모든 영역을 이야기합니다. 서버의 관리에서 부터, 데이터베이스, 로그인/회원가입 등의
데이터 처리까지 폭넓게 관리하게 됩니다. 이 영역에서는 주로 php,java,asp.net 등이 사용되는 것이 일반적인 경우였으나
구글의 v8엔진 발표로 브라우저 밖에서도 자바스크립트를 사용할 수 있게 되었습니다. 그 결과 nodejs라는 서버 플랫폼이 등장하게 되었고
이제 자바스크립트는 프론트엔드를 넘어 백엔드에까지 그 영향을 끼칠 수 있게되어 더 폭넓은 사용처를 가지게 되었습니다. 

++ 모바일 웹이 활성화 되며 자바스크립트는 앱개발까지 영향을 미치고 있습니다. cordova등으로 구현할 수 있는 '하이브리드 어플리케이션'이 
그것으로 웹으로 프론트엔드/백엔드를 구현하면 그 내용을 어플리케이션으로 변환해주는 과정을 거치게 됩니다. 이로서 자바스크립트는 
응용 프로그램 개발의 큰 분야인 웹,모바일에 모두 사용되게 되었습니다. 

#### 1.1.3. 그래서 javascript가 뭔지.. 

위에 말씀드렸다시피 기본적으로 javascript는 브라우저 안에서 HTML과 css를 조작하는 스크립트 언어가 맞습니다. 하지만 이제 그 기능을
브라우저 밖에서도 사용할 수 있게되어 백엔드에서도 사용할 수 있는 언어가 되었습니다. 홈페이지 하나를 서버까지 개설하는데 자바스크립트와
html,css만 알고있어도 구현할 수 있다는 이야기입니다. 

## 2. HTML과 javascript

### 2.1. DOM(Document Object Model)요소와 자바스크립트 

 HTML이 작성된 .html파일을 흔히 html 문서라고 합니다. html안에는 h1,div,span등 다양한 요소들을 가지고 있습니다. html의 구성을 
다른 말로 '**DOM(Document Object Model)**'이라고도 부릅니다. 그리고 그 안에 들어있는 h1,div,span등의 태그들을 '**DOM 요소(Element)**'라고 부릅니다. 이것은 흔히 HTML 요소라는 말과 혼용되어 사용되고 있습니다. 

 - HTML 문서 = DOM(Document Object Model)
 - HTML 요소(Element) = DOM 요소(Element)

 자바스크립트는 이 DOM요소 들을 조작하는데 주로 사용됩니다. 자바스크립트는 기본적으로 브라우저에 내장된 인터프리터를 통해 실행됩니다. 그렇기때문에 
브라우저 안에는 DOM 요소를 조작하는데 필요한 다양한 기능들을 미리 선언해두고 사용하게 됩니다. 그 기능들은 객체(Object)라 불리는 형태로 선언되어있습니다. 

#### 2.1.1. 객체(Object)?

자바스크립트의 문법에 해당되어야 하는 부분이지만, 브라우저안에 미리 선언되어있는 내장객체 들을 설명하기 앞서 간단하게 설명을 하고 지나가려고 합니다. 
**객체(Object)**는 자바스크립트의 자료형 중 하나 입니다. key와 value쌍을 가지는 사전 형태의 자료형이라고 할 수 있겠습니다. 예시는 아래와 같습니다. 

```javascript
var person = { name : 'Yoo' , age : 29 };

person.name
// 위 코드는 person의 name항목인 'Yoo'를 가리킵니다.
person.hello = function(){
  alert('Hello');
}
// Object는 일단 초기화 된 이후에는 .으로 새로운 이름을 넣어서 값을 주어 바로 추가할 수 있어 확장성이 높습니다. 
// 위는 함수를 Object 객체에 포함하는 예시입니다. 
person.hello(); // 함수 실행 
```

자바스크립트는 선언시에 자료형을 가리지 않는 var 타입을 지원합니다. Object형 자료형은 Array의 '[]'와 다르게 '{}'으로 감싸서 선언합니다. 
Object형 자료형은 String형태의 key와 무엇이든 올 수 있는 value 쌍으로 이루어지고 ':'으로 구분합니다. 그리고 각 내용들은 ','로 구분하게 됩니다.

해당 Object 변수에 하위에 어떤 키값들이 들어있는지는 자동 완성을 지원하는 에디터 혹은 브라우저 개발자 도구에서 
'객체.'까지만 입력하면 자동 완성되는 항목들로 확인해 볼 수 있습니다.

#### 2.1.2. 내장 객체?

앞서 Object에 대해 간단히?알아봤습니다. 브라우저에서는 HTML을 편하게 관리하기 위해 다양한 내장 객체(Object)들을 미리 선언해두었습니다. 
그 중에 우리가 오늘 사용할 것은 두가지 입니다. 

- **window** 
 : 가장 최상위 내장 객체입니다. 사용자가 직접 변수를 글로벌로 선언한다면 그 변수는 window의 하위 객체로 등록됩니다. 브라우저 내에서 
사용되는 대다수의 객체와 함수들이 window객체 하위에 선언되어있습니다.

- **document**
 : HTML을 관리하는 내장 객체 입니다. HTML 요소를 가져오고, 생성하고, 삭제하고, 속성을 부여하는 등 다양한 기능을 포함합니다. 


### 2.2. document객체로 DOM요소 조작하기

#### 2.2.1. 가져오기 & 내용 바꾸기  

기본적으로 특정 요소를 콕 집어 그 요소의 내용을 바꾸는 것이 자바스크립트로 구현 가능한 가장 기초적인 부분일 것입니다. 
그러기 위해서는 먼저 해당 요소를 콕 집어 변수로 가지고 있을 필요가 있습니다. 

`document.getElementById("아이디")`

HTML에서 특정 아이디를 가지는 요소를 가져오기 위해서는 위와 같은 함수를 사용합니다. 해당 함수를 사용하면 HTML요소를 반환합니다. 
요소를 가져오고 내용을 변환하는 코드를 간단하게 구현하면 아래와 같습니다.

```html
<body>
  <!-- example1.html -->
  <h1 id='head1'>Jello W0rld!</h1>
  <script> // 문서에서 스크립트를 작성할 때에는 script 태그안에 작성해야합니다.
    document.getElementById('head1').innerText = 'Hello W0rld!';
  </script>
</body>
```

가져온 html 객체는 'innerText' 값을 포함합니다. 이는 html안의 텍스트를 저장하고 있는 값으로, 변경해주면 
실제 html의 문자열 정보가 변경됩니다. 

#### 2.1.2. 요소를 생성하기 

HTML 요소를 수정한다면 생성도 가능해야 할 것입니다. HTML요소를 생성하는 과정은 아래와 같습니다. 

1. 추가할 요소를 생성(create)한다. 
2. 생성된 요소를 추가할 부모 요소를 지정한다.
3. 부모 요소에 생성된 요소를 추가(append)한다.

여기서 짚고 넘어가야할 것은 무조건 html 요소를 생성만 하는 것이 아니라 생성한 요소를 추가할 부모 요소 또한 알아야된다는 점입니다.
요소를 생성한다고 해서 HTML요소에 바로 추가되는 것이 아니라, 그 요소를 원하는 부모 요소의 자식 요소로서 추가해주어야 비로소 
화면에 출력될 수 있습니다. 

생성하는 코드는 
`document.createElemt('생성할 태그명')`입니다. 

```html
<!--example1.html-->
<body>
  <div id='elem'>
  </div>
  <script>
    var elem = document.getElementById('elem');
    var createdElem = document.createElement('h1');
    // 최초에 생성되어 있을때는 아무값도 가지지 않으므로 직접 값을 넣어주어야 합니다.
    createdElem.innerText = 'Hello!';
    elem.append(createdEleme);
  </script>
</body>
```

#### 2.1.3. 삭제하기 

삭제는 추가와 크게 다르지 않습니다. 

`요소.remove()`

삭제할때에는 삭제를 원하는 요소를 가져온 후, remove라는 함수를 실행해주면 됩니다. 
하위에 요소가 있어도 모두 삭제합니다. 

```html
<!-- example1.html -->
<body>
  <div id='elem'>
    <h1>Hello</h1>
    <h1>World!</h1>
  </div>
  <script>
  var elem = document.getElementById('elem');
  for(var i = 0; i < elem.children.length ; i++){
    // elem의 하위 요소들의 갯수를 알고싶을때는 객체.children.length로 접근합니다.
    // .children은 배열형태로 하위요소들을 갖습니다.
    if(elem.children[i].innerText === "World!"){
      elem.children[i].remove();
      // 특정 요소의 내용이 'World!'일때 삭제하는 코드입니다. 
      // 자바스크립트에서는 같다 표시는 ==가 아닌 ===을 사용하도록 합니다. (==도 사용은 가능합니다)
    }
  }
  </script>
</body>
```

#### 2.1.4. 클릭 이벤트와 alert

위에서는 간단하게 요소를 가져오고, 생성하고, 삭제하는 방법을 알아봤습니다. 이 기능들 이외에 다음으로 가장 많이 쓰이는 기능은
역시 클릭 이벤트입니다. 클릭이벤트는 html요소의 onclick 속성을 통해 지정할 수 있습니다. onclick은 실제 함수 실행부 라고 생각하시는게
좋습니다. 아래의 예제를 봅시다.

```html
<!--example2.html-->
<body>
    <button type='button' id='btn1' onclick='func1()'>
        Click me
    </button>
    <script type='text/javascript'>
        // 1. 클릭시 실행되는 함수 
        function func1(){
            // 알림창 띄우기 
            alert("Hello!");
        }
    </script>
</body>
```

btn1에는 onclick에 'func1()'이라는 값이 들어가있습니다. btn1을 클릭했을때 onclick의 값으로 쓰여있는 'func1()'부분을 실행한다는 
이야기 입니다. 그리고 func1은 스크립트 부분에 선언되어 window 내장객체에 선언되어있는 alert함수를 호출합니다. alert함수는 브라우저에서
알림창을 띄우는데 사용됩니다. 

좀 더 심화해서 버튼을 클릭했을때 특정 input요소의 값을 가져오는 것은 어떻게 해야될까요? 방법은 크게 다르지 않습니다. 


```html
<!--example2.html-->
<body>
    <input type='text' id='elem'/>
    <button type='button' id='btn2' onclick='func2()'>show me</button>
    <script type='text/javascript'>
        // 2. 클릭시 요소의 내용을 alert으로 띄우기 
        function func2(){
            console.log(document.getElementById("elem"))

            // innerText가 아닌 value임에 주의 
            alert(document.getElementById("elem").value);
        }
    </script>
</body>
```

위 코드는 input에 들어있는 값을 btn2를 클릭했을때 alert창으로 보여주도록 합니다. getElementById까지는 동일하지만 
'innerText'를 사용하는 것이 아니라 'value'를 사용하는 것을 볼 수 있습니다. 

기본적으로 사용자와 상호작용 하지 않는 요소(div,span,h1,p..)가 포함하는 문자열은 'innerText'를, 
사용자와 상호작용하는 요소(input,textarea)가 포함하는 문자열은 'value'를 통해서 가져오게 됩니다. 

## 마치며

여기까지 example1,example2에 포함하고 있는 내용을 정리해 봤습니다. prac1.html의 내용은 스터디 중에 다뤘으므로 
solution 브런치에 있는 prac1.solution.html 파일로 설명을 대체 하겠습니다. 

다음 스터디에는 prac2.html의 설명과 이벤트 등에 대한 내용을 다룰 예정입니다. 수고하셨습니다.