이제 조금 지루한 파트로 접어들었습니다. 
 자바스크립트는 UI를 이루고 있는 HTML을 다루는 도구로서 이번 스터디에서 소개되었고, 여태까지 공부한 내용도 UI를 조작하는데 필요한 부분만 설명하고 지나갔습니다. 하지만 변수를 선언하는 부분(var 타입 등등)이나 함수 선언 및 실행 등의 몇 가지 문법적인 부분에 대해서 의아해하셨을 수도 있으리라 생각합니다. 
 자바스크립트는 앞서 말씀드린 기능보다 훨씬 더 다양하고 강력한 기능들을 만들어 낼 수 있는 언어입니다. 그러기 위해서는 이런 문법적인 부분에서 간단하게라도 짚고 넘어가야 추후에 더 다양한 요구에 맞춰 유연하게 개발을 진행할 수 있을 것이라 생각합니다. 

# 1. 다른 언어와 다를바 없는 자바스크립트

 자바스크립트는 굉장히 널리 쓰이고 있는 언어로, 대다수의 언어가 갖는 기본적인 디자인은 대체적으로 따라가는 편입니다. 하지만 자바스크립트는 여러방면에서 간편화 되어있거나 유연하게 작성되어있는 문법이 있기 때문에 알아두는 것이 좋습니다. 항상 언어를 배울때 살펴보던 그 순서로 하나씩 살펴봅니다. 

## 1.1. 데이터 타입

 자바스크립트도 다른 언어처럼 데이터 타입이 제공됩니다. 하지만, 자바스크립트는 느슨한 데이터 타입을 갖는 언어이기때문에 그 종류도 조금 차이가 있습니다. 크게 종류는 아래와 같습니다. 

- Boolean      : true / false를 나타내는 상수형 타입입니다.
- null         : null이라는 '값'입니다. 변수가 선언되어있고 null이라는 값을 갖는 경우입니다.
- undefined    : 변수가 선언 되어있으나 아무 데이터 타입도 선택되지 않은 상태입니다. var 형으로 선언해 초기화를 하지 않은 것과 같습니다.
- Number       : 숫자형입니다. 자바스크립트에서는 숫자형을 단 하나만 갖습니다.
- String       : 문자열형입니다. 문자형인 char를 별도 제공하지 않고 모두 String으로 사용합니다.

- Object(객체) : 위에 열거된 데이터 타입과 조금 다릅니다. **'기본적'인 Object형은 데이터를 담는 key-value쌍의 데이터 사전**이라고 할 수 있습니다. 위에 열거된 데이터 타입 이외에 거의 모든 변수들은 Object형에 해당합니다. 그렇기 때문에, Object형의 하위에는 다양한 데이터 타입이 별도로 존재합니다.
이 특수한 key-value쌍 관계에 있어서 **value에는 지금껏 언급된 모든 데이터 타입이 할당 될 수 있습니다.**

- Object.Function : 함수 타입입니다. 자바스크립트에서는 함수 또한 변수에 담을 수 있습니다. 
- Object.Date : 날짜를 나타내는 Date형입니다. 데이터 타입을 검사하면 Object로 출력됩니다. 주로 날짜에 관련된 정보와 함수를 갖습니다.
- Object.Array : 배열형입니다. 배열을 활용하는데 필요한 값과 함수등을 갖습니다.
 
 자바스크립트에서 다루는 자료형은 위와 같습니다. Object의 하위 객체로서 존재하는 3가지 데이터 타입과 나머지로 크게 나뉠 수 있겠습니다. 다소 적은 규모의 데이터 타입을 제공하고 있는데, 이는 자바스크립트가 **느슨한 데이터 타입**을 갖는 언어이기 때문입니다.

```javascript
var num = 1;
```

 자바스크립트를 처음 배울 때 위 같은 코드를 자주 보았을 것 입니다. 기본적으로 자바스크립트는 'var'형을 제공하기 때문에 변수의 선언 및 초기화에 있어 사실상 데이터 타입의 제약을 받지 않습니다. 무슨 값을 넣더라도 알아서 데이터 타입을 갖기 때문입니다. 
 이 밖에도 자바스크립트가 느슨한 데이터 타입을 갖는다는 이유는 하나 더 있습니다.

```javascript
console.log('1' == 1); // true
```

 위 코드는 '1'과 1이 같은지 확인하는 코드입니다. 개발자 도구에서 위 코드를 그대로 복사해 넣어보면 **true**를 반환 합니다. 비교 연산자에 있어서 자바스크립트는 자동으로 형변환을 일으키기 때문입니다. 이 때문에 데이터 타입에 상관없이 값만이 중요한 연산을 진행한다면 훨씬 작업 속도가 향상될 수 있겠으나, 정확히 데이터 타입을 알아야하는 경우(데이터 베이스에 값이 직접 입력되어야 하는 경우 등)에는 정말 위험한 경우가 아닐 수 없습니다. 일부에서는 이런 자바스크립트의 느슨한 데이터 타입을 단점으로 많이 지적하기도 합니다. 

***

++ 그럼 '1' == 1 이 true가 아닌 false려면..?
자바스크립트의 비교형은 위같은 문제때문에 두가지로 나뉩니다. 바로 '=='와 '==='입니다. 첫번째 등호는 양변의 데이터형이 다르면 자동으로 형변환을 일으킵니다. 하지만 두번째는 다릅니다.

```javascript
console.log('1' === 1); // false
```

위 코드를 개발자 콘솔에 입력하면 false를 반환하게 됩니다. 이 등호는 형변환을 일으키지 않고 데이터를 비교하기 때문입니다. 그렇기에, 되도록 값이 제대로 들어왔는지 확인하기 위해서는 '==='을 사용하는 것이 좋습니다.
(JSLint등의 자바스크립트 표준 라이브러리에서는 되도록 '==='을 사용하도록 권장합니다.)

++ null == undefined

 null과 undefined의 차이는 데이터 타입 소개란에 적어두었습니다. null이란 값으로 초기화되어있는 null과 아무것도 초기화 되지 않아 아직 데이터 타입을 갖지 않은 상태를 undefined라 하였습니다. '=='과 '==='문제는 여기서도 발생합니다. 

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false
```

개발자 콘솔에서 위 두줄을 타이핑해보면 주석처럼 서로 다른 값을 갖습니다. null과 undefined는 결론적으로는 데이터가 아직 들어있지 않은 상태이므로 '=='으로 비교했을 때에는 true를 반환하게 됩니다. 그러나 null과 undefined는 엄연히 다른 값이기에 '==='로 비교했을때에는 false를 반환하게 됩니다. 상황에 따라서는 엄격히 따져야하는 경우가 많으니 위에서 언급했듯이 되도록 '==='을 사용합시다. 


## 1.2. 변수 선언과 초기화 

변수의 선언과 초기화 부분은 위에서 간략하게 언급했습니다. 변수를 선언하는데는 var를 사용하고 함수를 선언하는 경우만 조금 다릅니다. 각 데이터 타입의 초기화 부분을 봅시다.

```javascript
var state = true; // Boolean
var str_1 = 'Hello World'; // String 홑따옴표
var str_2 = "Hello World"; // String 쌍따옴표
var num_1 = 1; // Number 
var num_2 = 0.032; // Number
var fn_1 = function(){ /*내용*/ } //  함수
function fn_2 (){ /*내용*/ } // 함수를 변수에 담지않고 별도로 선언하는 경우
var dt = new Date(); // 현재 날짜를 가져올때는 이 형태로 가져옵니다. new 키워드에 대해서는 추후 설명합니다.
var arr = [1,2,3,4,5]; // 배열선언
var obj_1 = { 'key_1' : 'value1' , 'key_2' : 1  };
var obj_2 = {};
obj_2.key_1 = 'value1';
obj_2.key_2 = 1;
```

데이터 타입에 있어 제약이 거의 없기 때문에, 데이터 타입에 따라 선언 및 초기화를 하는 경우는 위의 경우 정도가 대다수입니다. 문자형의 경우에는 홑따옴표와 쌍따옴표를 혼용해서 사용합니다. 관점에 따라 하나만 쓰는 곳도 있지만, 대다수는 따지지 않으니 편한 것으로 사용합시다.

## 1.3. 반복문 조건문 

반복문과 조건문은 기존의 언어들과 동일합니다. swtich-case문과 예외 처리를 위한 try-catch까지 지원합니다. 자바의 try-catch와 동일합니다.

## 1.4. 함수의 선언과 실행 

함수의 초기화는 위에 언급했듯이 두가지 방법으로 가능합니다. 이 함수의 선언/초기화와 실행 부분을 조금 더 상세하게 살펴봅시다.

```javascript
// 1. function 명령어로 함수를 선언하기 
// function 함수명 (파라미터){ 내용 }
function fn_1 (num1, num2){
  return num1 + num2;
}
var result = fn_1(1,3); // 4
```

첫째로 'function'명령어를 이용해 이름이 있는 함수를 만들어 주는 방법입니다. 이렇게 선언된 함수는 전역으로 선언되며, window객체에 저장됩니다. 자바스크립트에서는 함수의 반환형을 별도로 작성하지 않습니다.
함수를 실행할때는 **'함수명(파라미터);'**형태로 작성하면됩니다. 함수가 반환할 내용이 있다면 함수를 실행 후 그 값을 별도로 변수에 저장할 수 있습니다.

```javascript
// 2. 익명함수를 작성 후 변수에 저장하기 
var fn_2 = function(num1, num2){ 
  return num1 + num2;
}
var result = fn_2(2,4); // 6
```

함수에는 기명함수와 익명함수가 있습니다. 두번째 방법에 사용된 함수를 이름이 없는 함수 즉, 익명함수 라고 부릅니다. 이 익명 함수는 function명령어를 사용하는 것 만큼 자주 사용됩니다. 예를 들어, object타입은 key-value쌍으로 이루어지는데 이 value부분에는 함수 또한 포함될 수 있습니다. 이 경우에는 익명함수를 사용해 함수를 선언하는 경우가 있습니다. 아래의 코드를 봅시다.

```javascript
var obj = { num_1 : 1, num_2 : 3 };
obj.sum = function(n1,n2){
  return n1+n2;
}
obj.sum(obj.num_1,obj.num_2);
```

이 코드는 object형으로 숫자와 함수를 저장한 코드입니다. 실제 업무에서 위와 같이 각 변수와 함수를 한 오브젝트에 담는 경우가 종종 생깁니다. 함수를 그냥 선언할 경우 window 객체에 선언되므로, 중복 선언되는 경우가 더러 있기에 함수의 이름이 길어질 수 밖에 없습니다. 파일을 나누더라도 상황은 같습니다. 그렇기 때문에, namespace개념으로 object를 선언하고 그 안에 각 파일에서 필요로 하는 함수를 선언하는 식의 디자인 패턴도 있습니다. 


# 2. 다른 언어와 차이 나는 자바스크립트

 여태까지 자바스크립트와 다른 언어의 공통점을 기준으로 설명했습니다. 그럼 이제 자바스크립트가 다른 언어와 어떤 차이를 가지는 지 알아봅시다. 자바스크립트는 데이터 타입에 있어 느슨한 제약을 가지고, 여러 프로그래밍 언어에서 언급되었듯이 컴파일언어가 아니라 인터프리터 언어입니다. 하지만, 이런 이론적인 부분이 아니라 다른 언어와 직접적인 차이를 갖는 부분은 어떤게 있을까요.

## 2.1. hoisting (호이스팅)

 많은 자바스크립트 입문자들의 머리를 아프게 하는 호이스팅입니다. 호이스팅을 설명하기 앞서서 먼저 자바스크립트의 변수 범위(scope)를 잠깐 짚고 넘어가봅시다.

### 2.1.1. 변수 범위

 자바스크립트의 변수 범위는 조금 헷갈리는 구조를 갖습니다. 함수-수준 범위를 갖기 때문입니다.[(chanlee blog)](http://chanlee.github.io/2013/12/10/javascript-variable-scope-and-hoisting/) 아래 예제를 봅시다.

```javascript
// 출처 chanlee blog
// http://chanlee.github.io/2013/12/10/javascript-variable-scope-and-hoisting/

var name = "Yoo";

function showName(){
  var name = "Park";
  console.log(name);
}
showName();  // 'Park'
console.log(name); // 'Yoo'
```

위 코드는 함수 범위 예제를 보여주고 있습니다. 가장 아래 'console.log'함수 시점에서는 전역 변수 'name'에 저장되어 있던 'Yoo'가 출력되고, 'showName'함수의 실행 시점에는 **함수 내부에 새로 정의된** 'name'이라는 변수에 담긴 'Park'을 출력하게 된다. 그냥 보았을 때는 다른 언어와 다른 점이 무엇인가 싶지만..

```javascript
var name = 'Yoo';
if(name !== undefined){
  name = 'Park';
  console.log(name); // Park
}
console.log(name); // ..?
```

위 코드에서 첫번째 'console.log'문에서는 'Park'을 출력하는 것이 당연해보인다. 그렇다면 두번째 'console.log'문에서는 name이 뭐라고 출력될까?
3번째 줄에 있는 할당문이 코드 블록에만 영향을 줄 것처럼 보이지만, 저 코드는 전역으로 선언되어있는 'name'의 값을 바꾸고 그 아래 'console.log'도 전역변수 자체의 값을 출력한다. 그러므로 가장 아래 있는 'console.log'또한 if 문 블록에서 변경된 값인 'Park'을 출력하게 된다. 이를 구분 짓지 않는다면 코드 작성에 굉장히 애로사항이 꽃피게 된다.. 

```javascript
var name = 'Yoo';

function showName(){
  console.log(name);
}

function showAnotherName(){
  name = 'Park';
  console.log(name);
}

showName(); // Yoo
showAnotherName(); // Park;
showName(); // Park ..?

// 해결책은 var!
function showAnotherName(){
  var name = 'Park';
  console.log(name);
}
```

위의 코드는 if문 블록의 예제처럼 함수 실행시 전역 변수의 값을 변경하는 오류를 일으키고 있습니다. 이런 경우에는 디버깅하기도 쉽지 않습니다. 코드가 실행되는 첫 부분부터 하나씩 짚어봐야되는 셈입니다. 이런 오류를 일으키지 않기 위해서는 'var'키워드를 이용해 함수내에서 지역 변수를 선언해 사용하는 것이 좋습니다. 

### 2.2. 그래서 hoisting이 뭐길래

코드에서 흔히 볼 수 있는 변수 선언과 초기화 부분이 사실 자바스크립트에서는 조금 다르게 동작합니다. 아래의 코드를 봅시다.

```javascript
function showName(){
  console.log('last name : ' + name); 
  var name = 'Yoo';
  console.log('first name : ' + name); 
}
showName();
// last name : undefined
// first name : Yoo
// name이 'hoist'되었기 때문!
```

위 코드를 실행했을 때, 다른 언어라면 문법 오류가 발생합니다. 첫째 console.log시점에 이미 name이라는 변수가 존재하지 않기때문입니다. 하지만 자바스크립트에서는 '호이스팅'이라는 기능 때문에 오류가 발생하지 않습니다. 본 함수가 실행될 때 실제로 생성되는 부분은 아래와 같습니다. 

```javascript
function showName(){
  var name; // 호이스트됨
  console.log('first name : ' + name);
  name = 'Yoo'; // 실제 할당부
  console.log('last name : ' + name);
}
```

위의 코드를 보면 기존의 `var name = 'Yoo';`코드가 `var name; name = 'Yoo';` 이 두가지 코드로 변환된 것을 알 수 있습니다. 호이스팅이란 이렇듯 선언과 할당을 나눠주는 특성입니다. 함수 내에서 호이스트가 일어날 경우 변수의 선언부는 함수의 최상단으로, 전역 레벨에서 일어날 경우 전역 코드의 가장 최상단으로 변수의 선언부를 보내버립니다. 

## 3. new 

자바스크립트에는 (지금은)클래스가 존재하지 않습니다. 하지만 클래스가 존재하지 않는다는 말이 '자바스크립트는 객체지향적 언어가 아니다.'라는 말과 일맥상통하는 것은 아닙니다. 자바스크립트에도 객체지향적인 용례가 존재합니다. 아래의 코드를 봅시다.

```javascript
// 생성자로 사용할 함수
function Person(firstName, lastName, age){ 
 // 여기서 this는 인스턴스 스스로를 나타낸다. 
 this.firstName = firstName;
 this.lastName = lastName;
 this.age = age;
}

// Person이라는 생성자를 new 키워드와 함께 사용하면
// 그 결과물은 object가 된다.
// person === { firstName : 'KyeongSoo' , lastName : 'Yoo' , age : 29 }
var person = new Person('KyeongSoo' , 'Yoo' , 29);
console.log(person.firstName); // 'KyeongSoo'
console.log(person.lastName); // 'Yoo'
console.log(person.age); // 29
```

위의 코드는 생성자로 사용할 함수 'Person'과 'new'키워드를 이용해 객체를 생성하는 모습을 보여줍니다. 자바스크립트에서는 객체지향을 위해 클래스를 만들어두지는 않았지만 이렇게 생성자함수와 'new' 키워드를 이용해 비슷하게 구현할 수 있습니다. 함수에 파라미터를 넘겨주어 초기화에 필요한 값을 넘겨받고 `this.firstName`과 같은 식으로 인스턴스에 내부 변수를 생성해 값을 할당해주는 방식입니다. 주석에도 적어두었지만 **여기서** 'this'는 인스턴스 그 자체(**this === person**)를 이야기합니다. 

## 4. prototype

위에서는 'new'키워드를 소개하며 자바스크립트의 객체지향을 이야기했습니다. 객체지향이라고 하면 클래스를 이용한 캡슐화 이외에도 상속이 필수인데 자바스크립트에는 클래스가 없습니다. 그렇다면 자바스크립트에서는 상속이 이루어질 수 없는 것일까요? 그렇지않습니다. 이를 설명하기 위해서는 prototype을 소개해야합니다. prototype은 **prototype object**를 가리키는 prototype property와 객체가 자신을 만들어낸 원형을 가리키는 **prototype link**를 가리킵니다. 보통은 prototype은 prototype property을 가리킵니다. 하지만 엄연히 이야기하면 prototype은 객체 자기 자신을 만든 원형을 의미합니다. 아래의 코드를 봅시다.

```javascript
function Apple(){ }
var apple = new Apple();
console.log(apple);
```

위 코드는 Apple이라는 생성자를 이용해 객체를 생성하는 코드입니다. 위 코드를 실행하고나면 주의깊게 봐야할 것이 있습니다. 바로 __proto__과 constructor 입니다. __proto__바로 이 녀석이 Apple이라는 **객체를 만들어내기 위해 사용된 객체원형**에 대한 숨겨진 연결(Prototype Link)입니다. 해당객체의 프로토타입은 Apple이라는 함수객체이며 이 객체의 생성자 역시 function Apple() 함수라는 것입니다. 즉 new Operator를 통해 만들어진 객체는 function Apple() 를 자신의 프로토타입으로 사용하여 만들어졌다는 말입니다. 

코드에 대해서 다시 이야기하자면, apple이라는 객체에게 있어 constructor는 prototype object와 함께 생성된 Apple 함수 자체를 가리키고 __proto__는 prototype link라는 것입니다. 말이 어려우니 아래의 예제를 다시 봅시다.

```javascript
function Foo(){}
Foo.prototype.say = function(){ console.log('Hello World'); }

var a = new Foo();
var b = new Foo();
a.say();  // Hello World
b.say();  // Hello World
```

위의 예제는 constructor함수와 함께 만들어지는 **prototype property**에 대한 예제입니다. Foo의 prototype object에 함수를 선언하면 그 이후에 new 연산자를 이용해 객체를 생성했을 때, 객체에서 함수를 따로 선언하지 않았더라도 해당 함수를 갖게됩니다. 이게 어떻게 가능한걸까요. 여기서 prototype link가 등장합니다. 

```javascript
function Foo(){}
Foo.prototype.say = function(){ console.log('Hello World'); }

var a = new Foo();
console.log(a.__proto__);
```

위 코드를 실행해보면 Apple예제와 다르게 constructor외에 say라는 함수가 같이 출력되는 것을 알 수 있습니다. 여기서 알 수 있는 것은 __proto__객체는 Foo라는 함수 자체가 아니라 원형인 Foo함수의 프로토타입 객체를 가리킨다는 것을 알 수 있습니다. 이 것을 prototype link라고 합니다. 그렇다면 객체지향과 상속을 설명하는데 이렇게 멀리 돌아온 이유가 뭘까요 

```javascript
function Ultra(){}
Ultra.prototype.sayUltra = function(){ console.log('say hello at ultra'); }

function Super(){}
Super.prototype = new Ultra();
Super.prototype.saySuper = function(){ console.log('say hello at super'); }

function Sub(){}
Sub.prototype = new Super();

var a = new Sub();
a.sayUltra(); // ..?
a.saySuper(); // ..?
```
위 함수를 실행하면 
1. `a.sayUltra()`가 실행되었을 때, 객체 a에서 sayUtrla함수를 찾는다. 
2. 없는 경우 `Sub.prototype`에서 함수를 찾는다. 
3. 없는 경우 `Super.prototype`에서 함수를 찾는다. 
4. 없는 경우 `Ultra.prototype`에서 함수를 찾는다. 

prototype의 연쇄를 이용하면 상속과 비슷한 형태를 띄게 되는 것을 알 수 있습니다. new 연산자와 Ultra 생성자 함수를 이용해 객체를 생성해 Super 객체의 prototype으로 연결해주면, Super의 __proto__(Prototype Link)는 Ultra가 되면서, Super의 Prototype Property에 가지고 있는 함수를 Super 객체가 자연스럽게 상속받게 되는 것입니다. 

## 5. this

다소 어려웠던 prototype을 지나 너무 간단해보이는 `this`키워드로 넘어오게 되었습니다. `this`는 겉보기엔 너무 간단해보이지만, 복잡한 함수와 객체안에서 혼동하기 쉬운 키워드입니다. 이 `this`는 말 그대로 자기 자신을 이야기하는데, 여기서 자기 자신이란 누굴 이야기하는 걸까요. 

```javascript 
function Foo (){ 
    this.name = 'Yoo'; 
    this.whatIsThis = function(){  console.log(this);  }
}
var foo = new Foo();
foo.whatIsThis();  // Foo
console.log(foo.name); // Yoo
```
위 코드의 둘째줄은 위의 new 연산자 설명에 쓰였던 코드로 조금 익숙할 수 있겠습니다. 여기서 Foo라는 생성자 함수안에서 쓰이는 this는 무엇을 의미하는 걸까요. Foo라는 생성자 함수로 인해 생성된 인스턴스로서의 자기 자신을 나타냅니다. 매번 new라는 키워드로 생성할 경우 매 객체마다 이러한 인스턴스가 생성되는 것입니다. 이렇게 this는 인스턴스 자기 자신을 나타냅니다. 복잡해지는 것은 아래의 경우부터 입니다. 

```javascript
function Foo(){ console.log(this); }
Foo(); // window ..!?
```

위는 일반적으로 함수를 실행할 때의 this를 출력하는 예제입니다. 위에서는 this의 결과로 Foo의 인스턴스가 출력된다고 했는데, 이 코드를 실행하면 window가 출력됩니다. 이렇게 되면 또 혼란스러워지기 시작합니다. 이유는 아래의 코드를 보면 도움이 될 것입니다. 

```javascript 
var Foo = {
    name : 'Yoo',
    whatIsThis : function(){ console.log(this); } 
}

Foo.whatIsThis(); // Foo
console.log(Foo.name); // Yoo
```

생성자 함수를 실행할때와 비슷하게, Foo 객체에서 가지고 있는 함수를 실행하면 Foo 객체 자신을 출력합니다. 이를 통해 알 수 있는 것은 객체의 안에 선언되어있는 함수에서 this는 함수를 갖고있는 객체를 나타낸다는 것을 알 수 있습니다. 위의 경우를 보면 전역으로 선언한 함수에서의 this가 window를 출력하는 이유를 알 수 있을 것입니다. 전역으로 선언된 함수를 소지하고 있는 객체는 window이기 때문에 this가 window를 가리키는 것입니다. 

# 맺으며

다소 어려운 이야기들이 섞여있지만, 다른 언어와 공통되는 부분을 먼저 확실히 알고있다면 자바스크립트의 특성 자체는 천천히 학습해도 충분합니다. 하지만 자바스크립트로 개발을 하는데 있어서 한층 더 발전하기 위해서는 반드시 숙지해야되는 것 들이므로, 시간이 된다면 꼭 다시 숙지해보도록합시다. 

다음 수업에서는 비동기 통신을 이용해 삼육대학교 게시판의 정보를 불러오는 예제를 작성해볼 예정입니다. 고생많으셨습니다. 
