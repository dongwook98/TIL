# 약간 복잡한 Array & Object 데이터바인딩

# 조금 더 복잡한 자료를 다뤄보자.

```html
<div class="container mt-3">
  <div class="card p-3">
    <span class="car-title">상품명</span>
    <span>가격</span>
  </div>
</div>

<script>
  var car2 = { name: '소나타', price: [50000, 3000, 4000] };
  document.querySelector('.car-title').innerHTML = car2.name;
</script>
```

car2 에 저장된 자료를 저렇게 복잡하게 바꿔보자.

object 안에 array/object도 집어넣을 수 있다.

array 자료도 array/object 넣을수 있다.

<br>

Q. 그럼 car2 에 있는 50000 이라는 데이터를 뽑아서 html의 가격표시부분에 꽂아넣고 싶으면 코드를 어떻게 짜야할까?

<br>
<br>
<br>

# 복잡한 데이터에서 자료꺼내려면

감상만 하지말고 **console.log 써서 복잡한 자료를 출력부터 해보자.**

콘솔창에선 복잡한 자료도 어떻게 생겼는지 쉽게 축약해서 알려주는데

우리는 여기서 **시작기호**만 잘보면 된다.

<br>
<br>

```js
console.log(car2); // {name: '소나타', price: Array(3)}
```

시작기호가 { 이거면 무조건 object 자료형이다. (무조건은 아니고 90%확률)

그래서 object 자료에서 자료꺼내는 문법부터 작성하면됨

<br>
<br>

```js
console.log(car2.price); // [50000, 3000, 4000]
```

근데 시작기호가 [ 이거면 무조건 array 자료형이다. (무조건은 아니고 90%확률)

그래서 array 자료에서 자료꺼내는 문법부터 작성하면 됨

<br>
<br>

```js
console.log(car.price[0]); // 50000
```

이렇게 하나하나 데이터 뽑아가면 아무리 어려운 것도 잘 뽑을 수 있음

<br>
<br>
<br>

# 근데 왜 이딴거 배우는 거임

Q. 그냥 html에 50000 이렇게 하드코딩 해놓으면 안될까요

A. 안바뀌면 그래도 되는데 실제 사이트는 html이 맨날 바뀌어야한다.

<br>

쇼핑몰을 만든다고 하면 차 가격이 맨날 바뀔 것이다.

가격을 매일매일 서버에서 받아와서 html로 보여줘야할텐데

그러면 html 안에 50000 이렇게 해놓거나

`document.querySelecto('.car-title').innerHTML = 50000;`

이렇게 대충 적어놓으면 나중에 수정하기가 어렵다.

그래서 "서버에서 받아온 데이터를 저기 꽂아넣어주세요~"라고 코드짜는 중인 것일 뿐이다.

<br>
<br>
<br>

# 실제 웹서비스 개발할 땐 2개 방식이 있다.

그냥 누가 내 사이트로 접속하면 html 이쁘게 만들어서 보내주는걸 웹서비스라고 한다.

근데 html을 누가 완성하는지에 따라 개발방식의 차이가 있다.

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EC%BA%A1%EC%B2%981-1.png">

**1. 서버에서 html을 미리 완성해서 고객에게 보내줌**

이걸 server-side rendering 이라고 한다.

<br>
<br>

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EC%BA%A1%EC%B2%982-1.png">

**2. 서버가 비어있는 html과 데이터만 보내줌**

그리고 자바스크립트를 이용해서 고객 브라우저 안에서 html을 완성한다.

이걸 client-side rendering 이라고 한다.

<br>

요즘은 2번이 유행이라 우리도 데이터를 서버에서 가져와서 데이터바인딩하는 방법을 배우고 있는 것이다.

근데 데이터바인딩하는 문법이 너무 길고 복잡하기 때문에 작은 사이트는 쌩 자바스크립트 써도 커버 가능한데

큰거 만들 땐 사람들이 라이브러리 설치해서 쓰는 것이다.

jQuery, React, Vue 이런거 사용하면 코드가 짧아진다.

<br>

더 최근엔 2번에 질려서 또 1번으로 돌아가는 움직임이 있다.

각각 장단점이 있음

<br>
<br>
<br>

# 오늘의 숙제:

list.html 만들고 하단 코드를 복사붙여넣기합니다.

그럼 상품 3개를 진열할 수 있는 카드레이아웃이 나옵니다. (bootstrap 필요)

products 변수안에 상품데이터도 준비되어있는데

자바스크립트를 열심히 짜서 3개의 상품 제목, 가격을 html에 전부 꽂아넣어오십시오.

## ✍️ 풀이

```html
<script>
  // 서버에서 받아온 데이터라고 가정
  var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' },
  ];

  console.log(products[0].title);
  // 제목 데이터 바인딩
  document.querySelectorAll('.card-title')[0].innerHTML = products[0].title;
  document.querySelectorAll('.card-title')[1].innerHTML = products[1].title;
  document.querySelectorAll('.card-title')[2].innerHTML = products[2].title;

  // 가격 데이터 바인딩
  console.log(products[0].price);
  document.querySelectorAll('.card-price')[0].innerHTML = products[0].price;
  document.querySelectorAll('.card-price')[1].innerHTML = products[1].price;
  document.querySelectorAll('.card-price')[2].innerHTML = products[2].price;
</script>
```

for 문 써도 좋을 거같다.

한번 써보자

```js
// document.querySelectorAll('.card-title')[0].innerHTML = products[0].title;
// document.querySelectorAll('.card-title')[1].innerHTML = products[1].title;
// document.querySelectorAll('.card-title')[2].innerHTML = products[2].title;
for (let i = 0; i < products.length; i++) {
  document.querySelectorAll('.card-title')[i].innerHTML = products[i].title;
}

// document.querySelectorAll('.card-price')[0].innerHTML = products[0].price;
// document.querySelectorAll('.card-price')[1].innerHTML = products[1].price;
// document.querySelectorAll('.card-price')[2].innerHTML = products[2].price;

for (let i = 0; i < products.length; i++) {
  document.querySelectorAll('.card-price')[i].innerHTML = products[i].price;
}
```
