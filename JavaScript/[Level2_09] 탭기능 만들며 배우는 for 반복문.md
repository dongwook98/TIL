![Feb-07-2023 00-40-49](https://user-images.githubusercontent.com/119502777/217016504-13881036-8671-408e-8865-5565263508be.gif)

위와 같은 탭기능을 만들어 보면서 for 반복문을 배워보자.

탭을 어떻게 만드냐면 그냥 UI 만드는 step 그대로 따라가면 된다.

버튼 3개, div 박스 3개 만들어두고

버튼누르면 거기 맞는 div박스를 보여주면 끝이다.

<br>

### 디자인

<br>

```html
<style>
  ul.list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #ccc;
  }
  ul.list::after {
    content: '';
    display: block;
    clear: both;
  }
  .tab-button {
    display: block;
    padding: 10px 20px 10px 20px;
    float: left;
    margin-right: -1px;
    margin-bottom: -1px;
    color: grey;
    text-decoration: none;
    cursor: pointer;
  }
  .orange {
    border-top: 2px solid orange;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid white;
    border-left: 1px solid #ccc;
    color: black;
    margin-top: -2px;
  }
  .tab-content {
    display: none;
    padding: 10px;
  }
  .show {
    display: block;
  }
</style>

<div class="container mt-5">
  <ul class="list">
    <li class="tab-button">Products</li>
    <li class="tab-button orange">Information</li>
    <li class="tab-button">Shipping</li>
  </ul>
  <div class="tab-content">
    <p>상품설명입니다. Product</p>
  </div>
  <div class="tab-content show">
    <p>스펙설명입니다. Information</p>
  </div>
  <div class="tab-content">
    <p>배송정보입니다. Shipping</p>
  </div>
</div>
```

<br>
<br>
<br>

# 자바스크립트 파일 모듈화하는 법

자바스크립트 코드가 너무 길고 복잡하면 다른 파일로 뺄 수 있다.

작업폴더에다가 어쩌구.js 파일 만들고 거기다가 열심히 코드짠 다음에

그 코드가 필요한 html 파일에서

```html
<script src="어쩌구.js"></script>
```

이렇게 쓰면 끝이다.

그럼 js 파일에 있던 코드가 저 위치로 복붙된다.

<br>

js 파일이 폴더 안에 숨어있으면 src="폴더명/어쩌구.js" 하면 된다.

<br>
<br>
<br>

# 첫 버튼부터 기능개발해보기

버튼이 3개나 있으니 "버튼 3개를 어떻게 한 번에 개발하지?" 부터 생각하는 사람이 있는데

그러면 금방 망하기 때문에 가장 간단하고 쉬운거 하나부터 만드는게 좋은 습관이다.

우선 **첫 버튼만** 기능개발 해보자.

탭의 0번 버튼 누르면 무슨 일이 일어나야하는가?

<br>

\- 버튼 0 누르면

\- 버튼 0에 orange 클래스명 부착

\- 박스 0에 show 클래스명 부착

이러면 끝인 것 같은데

근데 그것만 짜면..

<br>
<br>

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C.png" width="300">

<br>

▲ 버튼0 눌렀을 때 이렇게 보일 것 같다.

그래서 기존에 붙어있던 orange, show 라는 클래스는 제거해야한다.

<br>

**\- 버튼0 누르면**

**\- 버튼0,1,2에 붙어있던 orange 클래스명 전부 제거하라고 코드 3줄 짜기**

**\- 버튼0에 orange 클래스명 부착**

**\- 박스0,1,2에 붙어있던 show 클래스명 전부 제거하라고 코드 3줄 짜기**

**\- 박스0에 show 클래스명 부착**

<br>

이렇게 코드짜면 버튼0 기능 완성일 것 같다.

<br>
<br>
<br>

# jQuery 셀렉터로 여러 요소 찾은 뒤 하나만 고르기

지금 class="tab-button" 가진 요소가 3개나 있다.

그래서 $.('.tab-button').on() 이렇게 이벤트리스너 달면

3개 버튼에 전부 이벤트리스너를 달게된다.

그게 싫고 버튼0만 달고 싶으면

```js
$('.tab-button')
  .eq(0)
  .on('click', function () {});
```

이렇게 쓰면 된다.

$( ) 셀렉터로 찾은 요소 중에 x번째 요소만 선택하고 싶으면

$( ).eq(x) 쓰면 된다.

querySelectorAll() 쓰는 경우에도 [0] 이런거 붙여야 잘되는거 잊지말자.

<br>
<br>
<br>

# 오늘의 숙제 :

탭 기능 알아서 다 코드짜오면 됩니다.

```js
// 버튼0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼 0에 orange 클래스명 추가
// - 모든 div에 show 클래스명 제거
// - div0에 show 클래스명 추가

document
  .querySelectorAll('.tab-button')[0]
  .addEventListener('click', function () {
    document.querySelectorAll('.tab-button')[0].classList.remove('orange');
    document.querySelectorAll('.tab-button')[1].classList.remove('orange');
    document.querySelectorAll('.tab-button')[2].classList.remove('orange');
    document.querySelector('.tab-button').classList.add('orange');
    document.querySelectorAll('.tab-content')[0].classList.remove('show');
    document.querySelectorAll('.tab-content')[1].classList.remove('show');
    document.querySelectorAll('.tab-content')[2].classList.remove('show');
    document.querySelector('.tab-content').classList.add('show');
  });

document
  .querySelectorAll('.tab-button')[1]
  .addEventListener('click', function () {
    document.querySelectorAll('.tab-button')[0].classList.remove('orange');
    document.querySelectorAll('.tab-button')[1].classList.remove('orange');
    document.querySelectorAll('.tab-button')[2].classList.remove('orange');
    document.querySelectorAll('.tab-button')[1].classList.add('orange');
    document.querySelectorAll('.tab-content')[0].classList.remove('show');
    document.querySelectorAll('.tab-content')[1].classList.remove('show');
    document.querySelectorAll('.tab-content')[2].classList.remove('show');
    document.querySelectorAll('.tab-content')[1].classList.add('show');
  });

document
  .querySelectorAll('.tab-button')[2]
  .addEventListener('click', function () {
    document.querySelectorAll('.tab-button')[0].classList.remove('orange');
    document.querySelectorAll('.tab-button')[1].classList.remove('orange');
    document.querySelectorAll('.tab-button')[2].classList.remove('orange');
    document.querySelectorAll('.tab-button')[2].classList.add('orange');
    document.querySelectorAll('.tab-content')[0].classList.remove('show');
    document.querySelectorAll('.tab-content')[1].classList.remove('show');
    document.querySelectorAll('.tab-content')[2].classList.remove('show');
    document.querySelectorAll('.tab-content')[2].classList.add('show');
  });
```
