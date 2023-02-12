# Ajax 2 : 상품 더보기 버튼 만들기

https://codingapple1.github.io/js/more1.json 으로 GET요청하면 상품3개를 array로 보내줍니다.

<br>
<br>
<br>

# 상품 더보기 버튼누르면 상품3개 가져오기

버튼하나 만들고 그거 누르면 상품을 더 가져와봅시다.

https://codingapple1.github.io/js/more1.json 여기로 GET요청하면 상품 3개 데이터를 보내줍니다.

버튼누르면 상품데이터 가져와서 콘솔창에 출력해보십시오.

<br>

## ✍️ 내 풀이

```js
document.querySelector('.btn').addEventListener('click', function () {
  fetch('https://codingapple1.github.io/js/more1.json') //
    .then((resp) => {
      resp.json();
      // .json()로 js에서 쓸수있게 변환
    })
    .then((data) => {
      console.log(data);
    });
});
```

<br>
<br>

## 👍 강의 풀이

```html
<div class="container">
  <button class="btn btn-danger" id="more">더보기</button>
</div>

<script>
  $('#more').click(function () {
    $.get('https://codingapple1.github.io/js/more1.json').done((data) => {
      console.log(data);
    });
  });
</script>
```

<br>
<br>
<br>

# 가져온 데이터로 카드 3개 만들기

버튼누르면 데이터는 잘 가져오고 있는데

가져온 데이터로 카드레이아웃을 3개 더 만들어보자.

그래서 버튼 누르면 카드레이아웃이 3개 더 생성되면 성공이다.

그리고 더 가져온 상품제목, 가격도 html에 잘 박혀있으면 된다.

알아서 코드짜보도록

<br>

## ✍️ 풀이

```js
function 서버상품리스트추가(serverdata) {
  serverdata.forEach((el) => {
    let 템플릿2 = `<div class="col-sm-4">
         <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${el.title}</h5>
          <p>가격 : ${el.price}</p>
          </div>`;
    document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿2);
  });
}

document.querySelector('.btn').addEventListener('click', function () {
  fetch('https://codingapple1.github.io/js/more1.json')
    .then((resp) => {
      return resp.json();
    }) // json()로 js에서 쓸수있게 객체로변환.
    .then((data) => {
      서버상품리스트추가(data);
      // html생성하는 함수를 만들고 데이터를 함수에 전달해 새로고침 없이 렌더링되게함
    });
});
```

<br>
<br>
<br>

# 오늘의 응용문제

1. 더보기버튼을 2번째 누르면 7,8,9번째 상품을 더 가져와서 html로 보여주십시오

https://codingapple1.github.io/js/more2.json 여기로 GET요청하면 7,8,9번째 상품이 도착합니다.

<br>

힌트는 유저가 더보기버튼을 몇 번 눌렀는지를 어디 기록해놔야

내가 버튼 누를 때마다 어디로 GET요청할 지 판단할 수 있겠군요.

그리고 그 다음 10,11,12번 상품은 없으니

버튼을 3번은 못누르게 버튼을 숨기거나 그래도 좋을듯요

<br>

2. 유사한 코드가 발생하고 있습니다.

지금 코드를 잘 보면 forEach() 반복문을 2번 쓴 것 같은데

이 코드들이 매우 유사해보입니다.

함수나 그런걸로 축약해보는 연습도 해보면 좋을 것 같군요

<br>

힌트는

함수로 축약할 때 안에 미지의 변수같은게 있으면 파라미터로 바꾸는게 좋다고 했는데

a, i 이런 변수는 이미 콜백함수에 의해 파라미터화가 되어있기 때문에 a, i는 신경안써도 될듯요

<br>

## ✍️ 내 풀이

```js
let count = 0;
// 더보기 클릭횟수 저장할 변수 선언 후 0으로초기화

// 서버데이터를 인자로받아 html 요소를 생성하고 추가시키는 함수
function 서버상품리스트추가(serverdata) {
  serverdata.forEach((el) => {
    let 템플릿2 = `<div class="col-sm-4">
         <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${el.title}</h5>
          <p>가격 : ${el.price}</p>
          </div>`;
    document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿2);
  });
}

document.querySelector('.btn').addEventListener('click', function () {
  count++;
  if (count === 1) {
    fetch('https://codingapple1.github.io/js/more1.json') // 첫번째 서버에서 데이터 가져오기
      .then((resp) => {
        return resp.json();
      }) // .json()로 js에서 쓸수있게 객체로변환.
      .then((data) => {
        서버상품리스트추가(data);
      });
  }

  if (count === 2) {
    fetch('https://codingapple1.github.io/js/more2.json') // 두번째 서버에서 데이터 가져오기
      .then((resp) => {
        return resp.json();
      }) // .json()로 js에서 쓸수있게 객체로변환.
      .then((data) => {
        서버상품리스트추가(data);
      });
  }

  if (count >= 3) {
    document.querySelector('.btn').style.display = 'none';
  }
});
```
