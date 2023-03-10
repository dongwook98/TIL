# 저번시간 숙제풀이

다크모드 버튼눌렀을 때

버튼 누른 횟수가 홀수면 버튼 내부 글자를 Light로 변경해주세요~

버튼 누른 횟수가 짝수면 버튼 내부 글자를 Dark로 변경해주세요~

코드를 짜보자

그대로 코드로 번역만 하면 된다.

```js
var count = 0;

$('.badge').on('click', function(){
  count += 1;
  if (count가 홀수면) {
    내부글자를 Light로 변경
  } else {
    내부글자를 Dark로 변경
  }
});
```

한글만 잘 채우면 됨

count += 1 왜할까?

► 버튼누를 때 마다 버튼누른 횟수를 계속 업데이트하고싶으니까 쓴 것

```js
var count = 0;

$('.badge').on('click', function () {
  count += 1;
  if (count % 2 == 1) {
    $('.badge').html('Light');
  } else {
    $('.badge').html('Dark');
  }
});
```

2로 나눠서 나머지가 1이면 항상 홀수

jQuery로 찾은 요소 innerHTML을 바꾸고 싶으면 .html('바꿀내용') 쓸 수 있음

이러면 이제 버튼 누를 때 마다 글자가 Light <-> Dark 왔다갔다함

<br>

실제 다크모드처럼 사이트가 시커멓게 변하는건

1. 부착하면 시커매지는 class 하나를 만들어놓고

2. 버튼누를 때 class를 부착하면 끝

CSS 수업시간이 아니니 여기까지~

<br>
<br>
<br>

(참고) Bootstrap 스타일이 적용된 요소는 css 덮어쓰기가 어려울 수 있음

bg-dark 클래스명을 bg-light 이런 식으로 바꾸거나

아니면 붙어있던 class를 제거하거나 그러면 됨

<br>
<br>
<br>

# 변수의 선언, 할당, 범위라는 개념

변수쓸 땐 선언과 할당이라는 용어가 있는데

변수만드는걸 선언이라고 하고,

변수에 뭐 집어넣는걸 할당이라고 한다.

```js
var 나이;
var 이름;
```

이건 변수의 선언이라고 한다.

<br>
<br>
 
```js
var 나이;
var 이름;
나이 = 20;
이름 = 'kim';
```
밑의 2줄은 할당이라고 한다.

<br>

\- 저렇게 선언만 따로, 할당만 따로 할 수 있다.

\- 이미 있는 변수를 재선언도 가능하다.

\- 이미 들어있는 값을 등호로 재할당도 가능하다.

<br>
<br>
<br>

```js
function 함수() {
  var 나이 = 20;
  console.log(나이); //가능
}

console.log(나이); //불가능
```

변수는 사용가능한 범위가 있음

함수 안에서 변수를 만들었을 경우 함수 안에서만 사용 가능

밖에선 사용불가능

밖에서 출력하면 변수가 정의 안되었다고 에러남

<br>

\- 반대로 함수 바깥에서 만든 변수는 함수 안에서는 사용 가능

<br>
<br>
<br>

# var let const 문법 전부 변수생성 가능

```js
let 거주지 = 'seoul';
const 가격 = 3000;
```

var 대신 let, const 문법 써도 똑같이 변수생성이 가능

근데 let, const는 이런 기능을 제공한다.

<br> 
<br>
<br>

```js
let 거주지 = 'seoul';
let 거주지; // 에러내줌
```

let, const는 재선언 불가능 재선언하면 에러를 내줌

<br>

Q. 장점이 뭐임

우리가 코드 천줄 만줄 짜다보면 나중에 변수 만든거 또 만들고 그런 실수가 있다.

그걸 미연에 방지해주는 고마운 변수생성 키워드이다.

<br> 
<br>
<br>

```js
const 가격 = 3000;
가격 = 4000; //에러내줌
```

const는 재할당도 불가능하다. 재할당하면 에러를 내줌

<br>

Q. 장점이 뭐임

값을 수정하면 큰일나는 변수들을 만들고싶을 때 유용

나중에 값을 변경하는 실수를 방지하고 싶을 때 쓰면 됨

<br>
<br>
<br>

```js
if (true) {
  let 이름 = 'kim';
}

console.log(이름); // 없다고 나옴
```

let과 const는 범위가 더 좁다. 모든 중괄호가 범위

if, function, 나중에 배울 for 반복문 이런 것은 중괄호가 있다.

중괄호 안에서 만든 let const 변수의 경우 중괄호를 벗어나면 없다고 나온다.

<br>
<br>
<br>

<img src="https://codingapple.com/wp-content/uploads/2019/08/%EC%BA%A1%EC%B2%98-7-1024x241.png">

정리하자면 이렇다.

var 변수는 유연해서 재선언 재할당이 자유로움
