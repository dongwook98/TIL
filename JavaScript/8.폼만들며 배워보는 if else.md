# 폼만들며 배워보는 if else

## `<form>` 만들기

```html
<form action="success.html">
  <div class="my-3">ID: <input type="text" class="form-control" /></div>
  <div class="my-3">PW: <input type="password" class="form-control" /></div>
  <button type="submit" class="btn btn-primary">전송</button>
  <button type="button" class="btn btn-danger" id="close">닫기</button>
</form>
```

▲ 모달창 안에 폼 이렇게 만듬

지금은 전송버튼 누르면 폼 전송이 되며 success.html로 이동함

<br>

근데 여기에 제한을 걸어보자

첫 `<input>`에 입력한 값이 아무것도 없으면 전송버튼 누를 때 알림을 띄워보자

그럼 자바스크립트로 전송버튼누르면

"저기 `<input>`에 입력된 값이 공백이면 알림띄워주세요" 라고

코드 짜면 되는데 "이런 경우 코드 실행해주세요~" 라는 표현법은 배우지 않음

<br>

이 경우엔 자바스크립트 if 문법쓰면 됩니다.

<br>
<br>
<br>

## 잠깐 문법수업 : if else 조건문

조건부로 코드를 실행하고 싶으면 if 문법을 쓰면 됩니다.

```js
if (조건식) {
  실행할코드;
}
```

이렇게 적으면 됨

조건식이 참일 때 중괄호 안에 있는 코드를 실행해줌

조건식란엔 대부분의 경우엔 등호, 부등호 이런거 넣으면 됨

<br>
<br>

### 비교연산자

<br>

같다고 비교하고 싶으면 ==

크거나 작은지 비교하고 싶으면 >, <

크거나 같다, 작거나 같다는 >=, <=

다른지 비교하고 싶으면 !=

<br>
<br>
<br>

```js
if (3 < 1) {
  console.log('안녕');
} else {
  console.log('안녕2');
}
```

"조건식이 참이 아니면 이거 실행해주세요~" 라고 코드 짜고 싶으면

else 조건문 쓰면 됨. if 뒤에만 붙일 수 있음

그럼 위의 코드는 콘솔창에 뭐가 출력될까?

<br>
<br>
<br>

## 간편한 alert 함수

간단한 알림팝업 띄우고 싶으면 alert('어쩌구') 쓰면 됨.

<img src="https://codingapple.com/wp-content/uploads/2022/02/%EC%BA%A1%EC%B2%98.png" width="400">

이런 화면으로 사용자에게 간단한 안내문을 간편하게 띄울 수 있음

<br>
<br>
<br>

# 오늘의 숙제:

이걸 이용해서 오늘의 숙제를 해오도록 합시다.

첫째 `<input>`에 입력한 값이 공백이면 alert('아이디입력하세요') 라고 안내문을 띄워보도록 합시다.

입력한 값이 공백인지 어떻게 알 수 있냐고요?

자바스크립트 쓰면 html 내의 모든걸 찾고 조작할 수 있다고 했습니다.

`<input>`에 입력한 값 찾는 법도 있습니다.

안배운 것은 당연히 생각해서 나오는게 아니라 검색해봐야합니다.

### 풀이

```html
<form action="success.html">
  <div class="my-3">ID: <input type="text" class="form-control" /></div>
  <div class="my-3">PW: <input type="password" class="form-control" /></div>
  <button type="submit" class="btn btn-primary">전송</button>
  <button type="button" class="btn btn-danger" id="close">닫기</button>
</form>

<script>
  document.querySelector('.btn-primary').addEventListener('click', function () {
    const idValue = document.querySelector('.form-control').value;
    if (idValue === '') {
      alert('아이디를 입력해주세요');
    }
  });
</script>
```
