# 기본 함수 중에 setTimeout() 이런게 있는데

자바스크립트 기본 함수 중에 setTimeout() 이라는게 있다.

이거 쓰면 X초 후에 코드를 실행해준다.

<br>
<br>

```js
setTimeout(function(){ 실행할코드~ }, 기다릴시간);
```

위처럼 사용하면 된다.

시간은 ms 단위로 적으면 됨 (1ms는 1000분의 1초)

<br>
<br>

```js
setTimeout(function () {
  console.log('안녕');
}, 1000);
```

위처럼 쓰면 1초 후에 콘솔창에 '안녕'이 출력 된다.

<br>
<br>

```html
<div class="alert alert-danger">5초 이내 구매시 사은품 증정</div>
```

그럼 이렇게 html을 짜놓고 이런 문제를 풀어보자.

Q. 페이지 방문 5초 후에 위의 `<div>`를 숨기려면 코드를 어떻게 짜야할까요?

어떻게 했냐면

```html
<div class="alert alert-danger">5초 이내 구매시 사은품 증정</div>

<script>
  setTimeout(function () {
    $('.alert').hide();
  }, 5000);
</script>
```

이러면 된다.

**`<script>` 안에 적은 코드는 페이지 새로고침시 1회 실행된다.**

그러니 페이지 방문시 5초 후에 잘 숨겨진다.

jQuery 함수인 .hide() 는 display : none 준거랑 비슷하게 동작한다.

<br>
<br>
<br>

# X초마다 코드를 실행하고 싶으면 setInterval()

X초마다 코드를 실행하고 싶으면 setTimeout() 을 연달아서 여러개 쓰거나

<br>
<br>

```js
setInterval(function(){ 실행할코드~ }, 기다릴시간);
```

위처럼 setInterval 써도 됨

그럼 X초마다 안에 있는 코드를 실행해준다.

<br>
<br>

```js
setInterval(function () {
  console.log('안녕');
}, 1000);
```

위처럼 쓰면 1초 마다 콘솔창에 '안녕'이 출력 된다.

<br>
<br>
<br>

# 잠깐상식 : 자바스크립트 문법 vs 브라우저 사용법

      var let const if function

이런건 자바스크립트 프로그래밍 문법이고,

      document.querySelector()

      alert()

      setTimeout()

      addEventListener()

이런건 웹브라우저 사용법이다.

전문용어로 **Web Browser API**라고 한다.

여러분들 웹개발 잘하고 싶으면 자바스크립트 문법만 배우면 안된다.

웹브라우저 사용법도 많이 알아야 이쁜 UI도 만들고 폼 기능도 만들고 이벤트도 걸고 그럴 수 있다.

<br>

웹브라우저 사용법가지고 코드짜다가

코드 약간 줄이고 싶으면 function

자료를 잠깐 보관하고 싶으면 var

코드를 조건부로 실행하고 싶으면 if

이런거 쓰면 되는 것일 뿐이다.

<br>

자바스크립트 문법은 브라우저 사용법을 쓸 때

프로그래밍적인 기능같은걸 더하고 싶을 때 사용

예를들어서 조건분기, 값을보관, 코드축약

<br>
<br>
<br>

# 콜백함수관련 짧은 테크닉

그냥 함수 파라미터 자리에 들어가는 함수를 콜백함수라고 한다.

addEventListener(), setTimeout() 이런건 안에 콜백함수를 요구한다.

<br>

왜 콜백함수가 필요할까?

<br>

setTimeout 이런거 만든 사람이 그래야 작동하도록 만들어놔서 그렇다.

불만이 있으면 그 사람에게 따지도록 하고

<br>

중요한 점은 콜백함수도 일종의 함수기 때문에

다른 곳에서 만든 함수를 집어넣어도 잘 작동한다는 거다.

```js
setTimeout(함수, 1000);

function 함수() {
  console.log('안녕');
}
```

예를 들어 아까랑 다르게 이렇게 써도 잘 된다. 1초 후에 '안녕' 잘 출력됨

<br>

그래서 콜백함수자리에 있는 코드가 좀 더러우면

다른 곳에서 함수로 만들어놓고 그 함수 이름만 콜백함수자리에 집어넣는 식으로 코드짜도 된다.

<br>

저렇게 코드짜는건 자기 맘이니 싫으면 말아도 된다.

<br>
<br>
<br>

# 오늘의 숙제 :

위에서 만든 `<div>`안에 "5초 이내 구매시 사은품 증정" 이라는 문자가 있습니다.

1초마다 5라는 문자를 1씩 감소시켜봅시다.

0이 되면 `<div>`를 안보이게 처리합시다.

<br>

### 풀이

```html
<div class="alert alert-danger">
  <span class="count">5</span>초 이내 구매시 사은품 증정!
</div>

<script>
  setInterval(function () {
    // 5라는 문자를 1씩 감소
    // 5라는 문자를 컴퓨터한테 기억시키자
    // 1초마다 count 1씩 빼면될듯

    document.querySelector('.count').innerHTML -= 1;

    // 0이되면 <div> 안보이게
    if (document.querySelector('.count').innerHTML === '0') {
      document.querySelector('.alert').style.display = 'none';
    }
  }, 1000);
</script>
```

<br>

### 강의 풀이

```js
var count = 5;

setInterval(function () {
  count -= 1;
  if (count >= 0) {
    document.querySelector('#num').innerHTML = count;
  }
}, 1000);

// (참고) 타이머를 삭제하고 싶으면
// var 타이머 = setInterval(어쩌구);
// 이렇게 변수에 저장해둔 다음
// 타이머 삭제하고 싶을 때 clearTimeout(타이머) 이 코드 실행하면 됩니다.
```
