# 자바스크립트 이벤트리스너

# 저번시간 숙제 풀이

### 복잡하면 한글부터 짜고 코드로 옮겨보셈

1. 버튼1 누르면 alert 박스 안의 제목을 “아이디입력하세요”로 바꾸고
2. alert 박스 띄우기

```html
<div class="alert-box" id="alert">
  <p id="title">알림창임</p>
  <button>닫기</button>
</div>

<button onclick="아이디알림창()">버튼1</button>
<button onclick="비번알림창()">버튼2</button>

<script>
  function 아이디알림창() {
    document.getElementById('title').innerHTML = '아이디입력하셈';
    document.getElementById('alert').style.display = 'block';
  }

  function 비번알림창() {
    document.getElementById('title').innerHTML = '비번입력하셈';
    document.getElementById('alert').style.display = 'block';
  }
</script>
```

<br>

## 내가 푼 풀이

```html
<div class="alert-box" id="alert">
  <p id="title">알림창임</p>
  <button>닫기</button>
</div>

<button onclick="Alert('block');textChange('아이디')">버튼1</button>
<button onclick="Alert('block');textChange('비밀번호')">버튼2</button>

<script>
  function Alert(구멍) {
    document.getElementById('alert').style.display = 구멍;
  }

  function textChange(text) {
    document.getElementsById('title').innerHTML = `${text}입력해주세요!!`;
  }
</script>
```

<br>
<br>
<br>

# getElementsByClassName 셀렉터

어떤 html 요소를 찾고 변경할 때 id로 찾을수 있고

class 같은걸로도 찾을 수 있다.

```html
<p class="title1">테스트1</p>
<p class="title1">테스트2</p>
```

이런 html요소가 있다고 치자.

얘를 셀렉터로 찾고 변경하고 싶으면 class명이 title1인걸 찾아라~ 라고 명령줄 수도 있다.

```html
<p class="title1"> 테스트1 </p>
<p class="title1"> 테스트2 </p>

<script>

document.getElementsByClassName('title1')[0].innerHTML = '안녕';

<script/>
```

이러면 첫 `<p>` 태그 내용이 안녕으로 바뀜

`getElementsByClassName('클래스명')[순서]` 이렇게 쓰면 됨

<br>

[0] 이렇게 순서를 넣는 이유는

`getElementsByClassName` 셀렉터는 일치하는 class가 들어있는 모든 html 요소를 찾아주고 배열에 넣어서 찾아줌.

<br>

**🚨 그래서 그 중에 몇번째 요소를 바꿀지 [순서]를 꼭 뒤에 붙여줘야함**

[0] 이렇게 쓰면 찾은 것 중 위에서 부터 1번째 요소

[1] 이렇게 쓰면 찾은 것 중 위에서 부터 2번째 요소

[2] 이렇게 쓰면 찾은 것 중 위에서 부터 3번째 요소

…

이렇게 쓰면 된다.

대괄호 안붙이면 안됨!!

<br>

실은

`getElementsByTagName` -> 태그명으로 찾아줌

`getElementsByName` -> name 속성으로 찾아줌

등 여러가지 셀렉터가 있는데 `class, id` 로 찾는게 가장 흔해서 그것만 알아도 됨

<br>
<br>
<br>

# 이벤트 리스너

지금까진 버튼의 `onclick=" "` 안에 자바스크립트를 길게 짰는데 이것도 좀 더러워보임.

그게 보기싫으면 이벤트리스너 문법 사용하면 됨.

그럼 html 안에 자바스크립트 안적고도 똑같이 개발 진행 가능.

이벤트 리스너는 이렇게 사용합니다.

```js
document.getElementById('어쩌구').addEventListener('click', function(){
    ~~~~~~~~~~실행할 코드
});
```

이렇게 작성하면 **‘id가 어쩌구인 요소를 클릭하면 안의 코드를 실행해주세요~’** 라는 뜻

이거 쓰면 버튼 같은 곳에 onclick 속성을 더럽게 넣을 필요가 없다 ㄷㄷ

<br>
<br>
<br>

# 더 배워볼 개념 1. event

이벤트 리스너를 배웠는데 이벤트가 뭐임?

유저가 웹페이지 접속해서 클릭, 스크롤, 키보드입력, 드래그 등을 할 수 있는데 이걸 전문용어로 **이벤트**라고 부름

<br>

어떤 요소 클릭시엔 click 이벤트

마우스갖다대면 mouseover 이벤트

스크롤하면 scroll 이벤트

키입력하면 keydown 이벤트

… 몇십가지가 있다.

<br>

그리고 이벤트가 일어나길 기다리는 친구가 **이벤트 리스너** 이다.

이벤트 리스너는 이벤트가 일어나면 내부 코드를 실행해주는 고마운 기본 문법이다.

이벤트 종류는 수십가지가 있습니다.

(https://developer.mozilla.org/en-US/docs/Web/Events)

▲ 이벤트 목록인데 이런거 미련하게 외우지 마시고 필요할 때 찾아쓰자.

<br>
<br>
<br>

# 더 배워볼 개념 2. 콜백함수

```js
셀렉터로찾은요소.addEventListener('scroll', function () {});
```

이벤트 리스너 생김새를 잘 보면 함수같이 생김

실은 뒤에 소괄호 붙으면 다 함수임

<br>

근데 addEventListener() 함수에는 파라미터 자리에 2개의 자료를 집어넣음.

자바스크립트 addEventListener 문법 만든 사람이 그렇게 쓰라고 해서 그렇게 쓸 뿐인데

**둘째 파라미터로 함수가 들어감**

그래도 됨 만든 사람이 정한거 ㅇㅇ

<br>

저렇게 함수 파라미터자리에 들어가는 함수를 전문용어로 **콜백함수** 라고 함

콜백함수는 그냥 뭔가 **순차적으로 실행하고 싶을 때** 많이 보이는 함수형태임!
