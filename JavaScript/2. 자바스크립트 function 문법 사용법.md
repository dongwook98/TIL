# 자바스크립트 function 문법

## ⭐️⭐️⭐️ function을 쓰는 이유? ⭐️⭐️⭐️

<br>

함수는 **길고 더러운 코드를 한 단어로 축약하고 싶을 때** 쓰는 문법임

개발자 언어로 **특정 기능을 다음에도 쓰기 위해 모듈화해놓는 문법**

<br>

```js
function 자유롭게작명(){
  축약하고 싶은 긴 코드
}
```

1. function 키워드 쓰고 소괄호, 중괄호 붙이면 됨

2. 그리고 소괄호 왼쪽에 작명하고

3. 긴 코드를 중괄호 안에 담으면 코드 축약 끝

<br>

그럼 이제 **자유롭게작명()** 이거 쓸 때 마다 그 자리에 긴 코드가 실행됨

<br>
<br>
<br>

# Alert 여는 코드 function으로 축약해보기

```html
<button onclick="알림창열기()">알림창 여는 버튼</button>

<script>
  function 알림창열기() {
    document.getElementById('alert').style.display = 'block';
  }
</script>
```

Alert 여는 코드를 function 안에 넣어봄

그럼 이제 알림창열기() 라고 쓸 때 마다 function 안에 있는 긴 코드가 실행됨

그래서 버튼 **onclick 안에 예전처럼 길게 코드 안짜도 됨.** 단어하나 적으면 끝임

<br>
<br>
<br>

(참고)

함수 이름을 영어로 작명할 때

- 영어소문자로 시작

- open_alert() 이런거 안됨, openAlert() 이렇게 붙여서 쓰는게 자바스크립트 관습입니다. (일명 camelCase)

- 한글작명도 상관없음

<br>
<br>
<br>

# 자주 겪는 에러들 1. JS 코드는 밑에 짜야 함

<br>

자바스크립트는 html 조작하는 언어라고 했음

근데 조작할 html이 위쪽에 있어야 조작이 잘 됨

자바스크립트를 조작할 html 위에 작성하면 안됨

<br>

**왜냐면 컴퓨터가 html 파일을 읽을 때 위에서 부터 한줄한줄 읽는데**

**미리 html을 읽어놔야 조작이 가능하기 때문임**

<br>
<br>
<br>

# 자주 겪는 에러들 2. 오타주의

<br>

<img src="https://www.notion.so/image/https%3A%2F%2Fcodingapple.com%2Fwp-content%2Fuploads%2F2022%2F02%2F%25EC%25A0%259C%25EB%25AA%25A9-%25EC%2597%2586%25EC%259D%258C0.png?id=29493c79-369e-42e2-9908-75da8a6e9337&table=block&spaceId=db6fbe7b-82fc-4672-b4c8-ce39f0ea548d&width=1150&userId=f6024c74-017d-4cd7-9ad0-12cb9e23a804&cache=v2" width="500" height="200">

### 에러1

~~of null (reading ‘style’) 은 ‘style’ 왼쪽에 있는게 null 이라는 뜻

<img src="https://www.notion.so/image/https%3A%2F%2Fcodingapple.com%2Fwp-content%2Fuploads%2F2022%2F02%2F%25EC%25A0%259C%25EB%25AA%25A9-%25EC%2597%2586%25EC%259D%258C1.png?id=b7154994-2db9-4a32-a228-7ac906bb9109&table=block&spaceId=db6fbe7b-82fc-4672-b4c8-ce39f0ea548d&width=1150&userId=f6024c74-017d-4cd7-9ad0-12cb9e23a804&cache=v2" width ="500" heigth="250">

### 에러2

document.getElementByid 가 함수가 아니라는 오류 ~~id 가아니라 ~~Id임

<br>

아무튼 오타났다고 알려주는 고마운 메세지니까 이거 보고 **"디버깅"** 이란걸 해나가면 됨

버그없애는걸 **디버깅**이라고 함

실은 에러메세지 그대로 구글 찾아보는것도 빠름

<br>
<br>
<br>

# 이번 강의의 교훈

function 문법 생김새만 외운다고 공부 끝이 아니라

나중에 혼자서도 코드짜고 싶으면 **용도**를 잘 외우자

function 왜, 언제 쓴다고 했나?

그걸 알면 이제 자유자재로 function 활용가능한 것임

<br>
<br>
<br>

# 오늘의 숙제 :

Alert 박스 닫는 코드도 function 이용해서 짧게 한 단어로 축약해보십시오

<br>

## 풀이

```html
<div class="alert-box" id="alert">
  알림창임
  <button onclick="closeAlert()">닫기</button>
</div>
<button onclick="openAlert()">버튼</button>

<script>
  function openAlert() {
    document.getElementById('alert').style.display = 'block';
  }

  function closeAlert() {
    document.getElementById('alert').style.display = 'none';
  }
</script>
```
