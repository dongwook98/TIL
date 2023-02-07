# 이벤트 버블링과 이벤트관련 함수들

# 모달창 배경 누르면 닫히는 기능을 추가해보자.

<img src="https://user-images.githubusercontent.com/119502777/217216647-ece47af7-6be6-4a62-b858-341478a9041e.gif" width="250">

```html
<div class="black-bg">
  <div class="white-bg">모달창 내용</div>
</div>
```

▲ 모달창 HTML은 대충 이런 식으로 코드가 짜여있고

모달창 오픈할 때 show-modal 클래스명을 넣어서 오픈했다면

<br>

```js
document.querySelector('.black-bg').addEventListener('click', function () {
  document.querySelector('.black-bg').classList.remove('show-modal');
});
```

이렇게 코드짜면 된다.

그럼 검은 배경 눌렀을 때 모달창이 잘 닫힌다.

<br>

근데 이상한 점이 하나 있다.

검은배경 뿐만 아니라 흰배경, input, 글자 등 모달창 내부의 어떤걸 눌러도 다 닫힌다.

<br>
<br>
<br>

# 이벤트 버블링

어떤 HTML 태그에 이벤트가 발생하면 그의 모든 상위요소까지 이벤트가 실행되는 현상을 이벤트 버블링이라고 한다.

click이라는 이벤트로 예를 들어보면,

HTML 태그에 클릭이 발생하면 그의 모든 상위요소까지 자동으로 클릭된다는 소리다.

```html
<div>
  <div>
    <p>안녕</p>
  </div>
</div>
```

▲위의 코드에서 p태그 안녕이라는 글자를 클릭하면 브라우저는 사용자가 클릭을 총 3번 했다고 인지한다.

p랑 그 위의 div랑 그 위의 div

이게 이벤트 버블링인데 브라우저는 원래 그렇게 동작하도록 되어있다.

이 사실을 모르고 코드짜다보면 가끔 이상한 현상이 발생할 수도 있다.

<br>
<br>

그래서 아까 "검은배경 누르면 모달창 닫아주세요~" 코드를 다시 살펴보면

왜 흰배경 눌러도 모달창이 닫히냐면

```html
<div class="black-bg">
  (← 이거 누르면 모달창 닫으라고 코드짰음)
  <div class="white-bg">모달창 내용</div>
</div>
```

유저가 `<div class="white-bg">` 이거 클릭해도

이벤트 버블링 때문에 `<div class="black-bg">` 이것도 클릭한 것이다.

그래서 거기 붙어있던 이벤트리스너가 동작해서 모달창을 닫아주는 것이다.

<br>

이 문제를 해결할 때 자주 사용하는

이벤트관련 함수/메소드들을 살펴보도록 하자.

<br>
<br>
<br>

# 이벤트 리스너 안에서 쓰는 이벤트 함수들

```js
document.querySelector('.black-bg').addEventListener('click', function (e) {
  e.target;
  e.currentTarget;
  e.preventDefault();
  e.stopPropagation();
});
```

이벤트리스너의 콜백함수에 파라미터 아무거나 추가하면

이벤트관련 유용한 함수들을 사용가능하다.

파라미터 이름은 아무렇게나 작명하면 된다. 보통 대충 e라고 함

<br>

**e.target**은 실제 클릭한 요소 알려줌 (이벤트 발생한 곳)

**e.currentTarget**은 지금 이벤트리스너가 달린 곳 알려줌 (참고로 this라고 써도 똑같음)

**e.preventDefault()** 실행하면 이벤트 기본 동작을 막아줌

**e.stopPropagation()** 실행하면 내 상위요소로의 이벤트 버블링을 중단해줌

<br>

여기서 중요한건 e.target인데

이벤트 버블링이 일어난다고 해도

사용자가 실제로 클릭한 그 요소는 저 문법으로 찾아낼 수 있다는걸 기억해두자.

<br>
<br>
<br>

# 그럼 모달창 닫기 버그를 해결해보자

```js
document.querySelector('.black-bg').addEventListener('click', function(e){
   지금 실제로 클릭한게 검은 배경일 때만 닫아라
})
```

한글먼저 짜놓으면 쉽다. 이제 자바스크립트로 번역만 잘하면 된다.

```js
document.querySelector('.black-bg').addEventListener('click', function (e) {
  if (e.target === document.querySelector('.black-bg')) {
    document.querySelector('.black-bg').classList.remove('show-modal');
  }
});
```

이러면 될 것 같은데

언제나 의심을 해야한다.

둘 다 콘솔창에 출력해보고 == 비교해보는 버릇을 가지도록 하자.

<br>

(참고)

저기서 e.currentTarget 출력해보면 검은배경이 나오기 때문에

e.target === e.currentTarget 이렇게 써도 된다.

아니면 e.target === this 이렇게 써도 된다.

<br>

(참고2)

jQuery 셀렉터로 찾은 결과와

querySelector 셀렉터로 찾은 결과는 다르게 생겼다.

출력해보면 전자는 이상한 object 이런게 나오고 후자는 `<html>` 이런게 나온다.

그래서 e.target == $('.black-bg') 이건 사용불가능하다.

그리고 애초에 jQuery 셀렉터끼리 등호비교는 불가능하다.

<br>

`$('.black-bg').is($('.black-bg'))` 이런 비교용 함수쓰든가 하면 된다.

위 예제에선 `$(e.target).is($('.black-bg'))` 이러면 된다.

<br>
<br>
<br>

# 오늘의 교훈 :

1. 이벤트 버블링은 항상 일어난다

2. 이벤트 관련 유용한 함수들을 사용가능하다

잘 기억해두자.
