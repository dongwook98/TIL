# Ajax 1 : 개념정리

Ajax는 서버와 데이터주고받는 법 중 하나인데

서버가 뭔지 모르면 아무리 ajax 문법 외워봤자 응용을 못하기 때문에 서버가 뭔지 정리부터 하자.

<br>
<br>

# 서버란?

유저가 데이터달라고 요청을 하면 데이터를 보내주는 간단한 프로그램일 뿐이.

네이버웹툰 서버 : 유저가 웹툰 달라고 하면 웹툰 보내주는 프로그램

유투브 서버 : 유저가 영상 달라고 하면 영상 보내주는 프로그램

이다.

<br>

근데 그냥 데이터달라고 떼스면 주는게 아니라

서버에 데이터를 요청할 때는

1. 어떤 데이터인지 url로 잘 기재해야하고

2. 어떤 방법으로 요청할지 결정해야 (GET/POST 등)

데이터를 보내준다.

<br>
<br>
<br>

# GET/POST 요청하는 법?

GET요청은 서버에 있던 데이터를 읽고싶을 때 주로 사용하고

POST요청은 서버로 데이터를 보내고 싶을 때 사용한다.

(서버는 유저데이터를 DB에 저장해주는 역할도 해서요)

실은 PUT, DELETE 요청도 있긴 하다.

<br>
<br>
<br>

GET요청을 날리고 싶으면 가장 쉬운 방법은 브라우저 주소창이다.

거기에 url 적으면 그 곳으로 GET요청을 날려준다.

<br>

POST요청을 날리고 싶으면

`<form action="요청할url" method="post">` 태그 이용하면 된다.

그럼 폼이 전송되었을 때 POST요청을 날려준다.

<br>

근데 GET, POST 요청을 저렇게 날리면 단점이 뭐냐면 **브라우저가 새로고침**된다.

<br>
<br>
<br>

# AJAX란?

서버에 GET, POST 요청을 할 때 <span style=color:red>**새로고침 없이 데이터**</span>를 주고받을 수 있게 도와주는

간단한 브라우저 기능을 AJAX라고 한다.

그거 쓰면 새로고침 없이도 쇼핑몰 상품을 더 가져올 수도 있고

새로고침 없이도 댓글을 서버로 전송할 수도 있고

그런 기능을 만들 수 있는 것이다.

<br>
<br>
<br>

# jQuery로 AJAX 요청하기

$.get() 라는 함수를 쓰고 안에 url만 잘 기입하면 됩니다.

연습삼아서 https://codingapple1.github.io/hello.txt 여기로 GET요청해보자.

그럼 인삿말을 하나 가져올 수 있다.

```js
$.get('https://codingapple1.github.io/hello.txt');
```

이러면 진짜 데이터 가져온다.

안되면 html파일 미리보기가 제대로 안떠있는 것이다.

브라우저 주소창에 127.0.0.1:어쩌구 이렇게 떠있어야한다.

VScode는 live server 익스텐션 설치하면 된다.

<br>
<br>

```js
$.get('https://codingapple1.github.io/hello.txt').done(function (data) {
  console.log(data);
});
```

근데 가져온 데이터가 어디 들어있냐면

.done 아니면 .then 뒤에 붙이고 콜백함수넣고 파라미터 하나 만들면 거기에 들어있다.

진짜 인삿말 들어있는지 출력해보자.

<br>
<br>

```js
$.post('url~~', { name: 'kim' });
```

서버로 데이터를 보낼 수 있는 POST요청을 날리고 싶으면 이렇게 쓴다.

url 잘 적고 뒤에 서버로 보낼 데이터를 적으면 된다.

당연히 얘도 .done 이런거 붙이기 가능

<br>
<br>

```js
$.get('https://codingapple1.github.io/hello.txt')
  .done(function (data) {
    console.log(data);
  })
  .fail(function (error) {
    console.log('실패함');
  });
```

ajax 요청 성공시 .done 안에 있는 코드를 실행해준다.

ajax 요청 실패시 .fail 안에 있는 코드를 실행해준다.

error 저거 출력해보면 에러관련 정보를 출력해준다. 그거 보고 디버깅하면 된다.

예를 들어 404 이런 에러코드는 url 이 잘못되었다는 뜻이다.

<br>

done/fail 말고 then/catch 써도 된다.

<br>
<br>
<br>

# 쌩자바스크립트는 fetch 이런거써서 AJAX 요청가능

```js
fetch('https://codingapple1.github.io/price.json')
  .then((res) => res.json())
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log('실패함');
  });
```

fetch 함수는 Edge 브라우저 이상에서만 동작한다.

근데 코드가 한 줄 더 필요한 이유가 뭐냐면

<br>
<br>

서버와 데이터를 주고받을 때는 **문자만 주고받을 수 있다.**

array, object 이런거 전송불가능

근데 아까 { price : 5000 } 이런 object 무리없이 받아왔는데??

어떻게 한거냐면 object를 JSON으로 바꿔서 전송해줘서 그렇다.

<br>

array 아니면 object에 따옴표를 다 쳐서 '{ "price" : 5000 }' 대충 이렇게 만들면 JSON이라는 자료가 된다.

JSON은 문자로 인식하기 때문에 서버와 데이터주고받기가 가능하다.

<br>

하지만

jQuery의 $.get() 이런건 JSON으로 자료가 도착하면 알아서 array/object 자료로 바꿔준다.

기본함수 fetch() 이런건 JSON으로 자료가 도착하면 알아서 array/object 자료로 바꿔주지 않는다.

그래서 fetch() 로 가져온 결과를 array/object로 바꾸고 싶으면 res.json() 이런 코드 한 줄 추가하면 된다.

<br>

그게 귀찮으면 jQuery나 axios 이런 라이브러리 설치하면 ajax가 약간 더 간편해진다.

<br>
<br>
<br>

# 오늘의 숙제 :

```html
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100" />
      <h5>Card title</h5>
      <p>가격 : 70000</p>
    </div>
  </div>
</div>
```

list.html 안에 있던 상품목록 html을 비우고

이거 넣고 시작하면 됩니다.

새로운 카드 레이아웃인데 이거 쓰는게 나중에 더 편리할 것 같으니까요.

<br>

그래서 오늘의 숙제는

**자바스크립트를 이용해서 카드레이아웃을 3개 생성해오면 됩니다.**

var products 에 있던 데이터도 html에 잘 꽂혀있어야합니다.

`<div class="col-sm-4">` 저거 덩어리가 카드 1개입니다.

## ✍️ 풀이

```js
for (let i = 0; i < products.length; i++) {
  let 템플릿 = `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${products[i].title}</h5>
          <p>가격 : ${products[i].price}</p>
          </div>`;
  document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿);
}
```
