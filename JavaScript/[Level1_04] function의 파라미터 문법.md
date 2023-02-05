# function의 파라미터 문법

# function에 구멍뚫기

```js
function openAlert(구멍) {
  document.getElementById('alert').style.display = 구멍;
} // 구멍뚫어놓으면 함수하나로 다양한 코드 실행가능해짐

// 함수 1개로 2종류 코드실행 가능
openAlert('block');
openAlert('none');

// function openAlert() {
// document.getElementById('alert').style.display = 'block';
// }

// function closeAlert() {
//document.getElementById('alert').style.display = 'none';
// }
```

<br>
<br>
<br>

# ⭐️⭐️⭐️ 구멍을 쓰는 이유와 언제 써야하는가? ⭐️⭐️⭐️

1. 왜?

► 구멍 뚫어 놓으면 함수하나로 다양한 코드 실행가능해짐

2. 언제

▶︎ 비슷한 함수가 많으면 그냥 가변적인 부분을 구멍 뚫어 보셈

<br>
<br>

개발자 용어로

구멍 -> **파라미터**

function, 파라미터는 필수 문법이아님

우리가 보기 편하기 위해 쓰는 문법임

<br>
<br>
<br>

# 파라미터 예시

```js
function plus1() {
  2 + 1;
}
function plus2() {
  2 + 2;
}
function plus3() {
  2 + 3;
}

// ✨ 구멍을 뚫어놓으면 위처럼 비슷한 함수 여러개 만들 필요없음
function plus(구멍) {
  2 + 구멍;
}

plus(1);
plus(2);
plus(3);
```

<br>
<br>
<br>

# 파라미터 문법 특징

1. 파라미터 작명은 아무렇게나 가능

```js
function plus(abcdefg) {
  2 + abcdefg;
}
```

2. 파라미터 여러개 가능

```js
function plus(a, b, c, d, e, f, g) {
  return a + b + c + d + e + f + g;
}

plus(2, 5, 5, 5, 5, 5, 5);
```

<br>
<br>
<br>

# 오늘의 숙제 :

버튼 2개를 만들어놓고

버튼1과 버튼2를 누르면 각각 다른 이름의 alert 박스가 나오도록 코드를 짜봅시다.

- 버튼1을 누르면 '아이디를 입력하세요' 라는 alert 박스가 등장해야합니다.

- 버튼2를 누르면 '비밀번호를 입력하세요' 라는 alert 박스가 등장해야합니다.

<br>

## 풀이

구현방법은 2개가 있음

1. 미리 html로 alert 박스를 2개 만들어놓고

버튼1 누르면 박스1 띄우기

버튼2 누르면 박스2 띄우기

이렇게 짜도 되겠지만 이러면 나중에 alert 박스가 100종 필요하면 끔찍함

<br>

2. 기존에 있던 alert 박스를 재사용

버튼1 누르면 alert 박스 안의 제목을 "아이디입력하세요"로 바꾸고 alert 박스 띄우기

버튼2 누르면 alert 박스 안의 제목을 "비밀번호입력하세요"로 바꾸고 alert 박스 띄우기

이러면 효율적일듯

```html
<div class="alert-box" id="alert">
  <p class="title1">알림창임</p>
  <button class="title1" id="close">닫기</button>
</div>
<button onclick="Alert('block');textChange('아이디')">버튼1</button>
<button onclick="Alert('block');textChange('비밀번호')">버튼2</button>

<script>
  document.getElementById('close').addEventListener('click', function () {
    document.getElementById('alert').style.display = 'none';
  });

  function Alert(구멍) {
    document.getElementById('alert').style.display = 구멍;
  }

  function textChange(text) {
    document.getElementsByClassName(
      'title1'
    )[0].innerHTML = `${text} 입력해주세요!!`;
  }
</script>
```
