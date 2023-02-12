# 서브메뉴 만들어보기와 classList 다루기

<img src="https://codingapple.com/wp-content/uploads/2022/02/%EC%BA%A1%EC%B2%981-1.png" width= "300" heiht=" 200" >

버튼 누르면 등장하는 서브메뉴를 만들며

자바스크립트로 class 탈부착하는 문법을 배워보자.

<br>
<br>
<br>

# Bootstrap 설치해서 쓸 것

Bootstrap css 파일을 설치해놓으면

버튼, 탭, 메뉴 같은걸 복붙식으로 개발할 수 있음

css 짜기 귀찮으니 설치 ㄱㄱ

구글에 bootstrap 검색

1. 우선 버전 5.x 버전인지 확인

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
```

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
```

2. css 파일은 `<head>` 태그 안에,

3. js 파일은 `<body>` 태그 끝나기 전에 붙여넣으면 설치 끝

<br>
<br>
<br>

# Navbar 만들기

Bootstrap을 설치해놨으면

사이트에서 원하는 웹 UI 검색해서 복붙하면 됨

Navbar 검색해서 복붙

```html
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand">Navbar</span>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
```

이러면 상단바 제작 끝

<br>
<br>

<img src="https://codingapple.com/wp-content/uploads/2022/02/%EC%BA%A1%EC%B2%981-1.png" width="400" height="200">

그럼 이제 버튼 누르면 등장하는 서브메뉴 만들자

저런 UI 어떻게 만들까

1. 미리 html css로 디자인 해놓고 숨기든가 함

2. 버튼누르면 보여줌

이러면 끝이라 미리 디자인부터 ㄱㄱ

디자인은 그냥 bootstrap 홈페이지에서 list group 찾아서 `<nav>` 밑에 복붙 ㄱㄱ

```html
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```

서브메뉴 html css 디자인 완성

<br>
<br>
<br>

# 하지만 이번엔 class 탈부착식으로

버튼 누르면 보여달라고 코드짜자.

`어쩌구.style.display = 'block'`

이렇게 해도 되지만 이번엔 class 탈부착식으로 구현해보자.

```css
.list-group {
  display: none;
}
.show {
  display: block;
}
```

css 파일 열어서 평소에 .list-group 붙은 요소는 숨겨놓고

그리고 거기에 show라는 클래스를 부착하면 보여주는 식으로 개발

이제 버튼누르면 `<ul class="list-group">` 에다가 show라는 클래스 부착하라고 코드짜면 서브메뉴 UI 완성

<br>

### 왜 class를 부착해서 만드는가??

**나중에 display:block 말고 다른 스타일도 동시에 주고 싶을 경우 유용함**

<br>
<br>
<br>

# 버튼 클릭시 저기에 클래스명을 추가해주세요

버튼 눌렀을 때 show 라는 클래스를 저기에 추가해보자

<br>

class명을 원하는 요소에 추가하는 법은

`셀렉터로찾은요소.classList.add('클래스명')`

class명을 원하는 요소에서 제거하는 법은

`셀렉터로찾은요소.classList.remove('클래스명')`

당연히 구글 검색해봐야 알지 생각해서 나오는 것들이 아님

<br>
<br>

```js
document
  .getElementsByClassName('navbar-toggler')[0]
  .addEventListener('click', function () {
    document.getElementsByClassName('list-group')[0].classList.add('show');
  });
```

▲ 그래서 class="navbar-toggler" 가진 요소 클릭하면

class="list-group"인 요소에 show라는 클래스명 추가하라고 코드 짬

이제 버튼누르면 서브메뉴가 잘 보임

<br>
<br>
<br>

# 버튼 한 번 더 누르면 숨기기

버튼을 한 번 더 누르면 서브메뉴를 숨기고 싶다면?

그럼 컴퓨터에게 이렇게 명령내리면 됨

**"버튼 한 번 더 누르면 show 클래스를 제거해주세요"**

근데 이건 나중에 if문, 변수문법을 배우면 직접 만들어볼 수 있기 때문에

좀 쉬운 방법을 먼저 알아보자

```js
document
  .getElementsByClassName('navbar-toggler')[0]
  .addEventListener('click', function () {
    document.getElementsByClassName('list-group')[0].classList.toggle('show');
  });
```

`classList.toggle()` 쓰면

- 클래스명이 있으면 제거하고

- 클래스명이 없으면 붙여줍니다.

그래서 왔다갔다하는 UI 만들 때 유용하게 쓰면 됨

<br>
<br>
<br>

# querySelector

`getElementById()`

`getElementsByClassName()`

위 방식 말고도 다른 방식으로 html 요소를 찾아주는 셀렉터도 있음

querySelector인데 이거 쓰면 css 잘하면 편리하게 사용 가능

<br>
<br>

```html
<div class="test1">안녕하세요</div>
<div id="test2">안녕하세요</div>

<script>
  document.querySelector('.test1').innerHTML = '안녕';
  document.querySelector('#test2').innerHTML = '안녕';
</script>
```

querySelector() 안에는 css 셀렉터 문법을 사용 가능

(css에서 마침표는 class라는 뜻이고 #은 id라는 뜻임)

다만 querySelector() 는 맨 위의 한개 요소만 선택해줌

```html
<div class="test1">안녕하세요</div>
<div class="test1">안녕하세요</div>

<script>
  document.querySelectorAll('.test1')[1].innerHTML = '안녕';
</script>
```

▲ 그래서 위처럼 test1이라는 클래스가 중복으로 여러개 있는데

X번째 요소를 선택하고 싶은 경우엔 querySelectorAll() 쓰면 됨

**querySelectorAll() 은 해당하는걸 다 찾아서** [] 안에 담아줌

그래서 [숫자] 를 뒤에 붙여서 원하는 위치에 있는 요소 찾아쓰면 됨
