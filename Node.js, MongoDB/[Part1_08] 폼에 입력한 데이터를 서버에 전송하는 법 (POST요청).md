# 폼에 입력한 데이터를 서버에 전송하는 법 (POST요청)

<span style=color:red>**(업데이트사항) 2021년 이후로 설치한 프로젝트들은**</span> body-parser 라이브러리가 express에 기본 포함이라

따로 npm으로 설치할 필요가 없다.

```js
app.use(express.urlencoded({ extended: true }));
```

▲ 이 코드만 위쪽에 추가해주시면 됩니다.

<br>
<br>
<br>

# 콜백함수에 대해 알아보자.

자바스크립트에서 즐겨 쓰는 문법 패턴 중 하나가 콜백함수이다.

함수는 그냥 **function 함수(){}** 이렇게 만들어서 쓰면 된다.

그런데 함수를 사용할 때 파라미터자리에 함수도 집어넣을 수 있다.

예를 들면 ... 우리가 get 함수를 쓸 때 계속 그래왔다.

<br>
<br>

```js
app.get(어쩌구, function () {});
```

get도 소괄호를 뒤에 붙이는걸 보니 함수가 맞는데, get 함수를 쓸 때 소괄호 내에 또 function(){} 이라는 함수를 집어넣고 있다.

요런 함수안에 들어가는 함수를 바로 **콜백함수**라고 부른다.

자바스크립트에선 **무언가 순차적으로 실행하고 싶을 때 콜백함수를 이용**한다.

<br>
<br>

```js
app.get('/write', function () {
  어쩌구;
});
```

**누군가 /write로 요청하면 콜백함수 내부의 어쩌구라는 코드를 실행해주세요~** 라고 순차적으로 기능을 실행할 때 많이 사용한다.

우리는 그냥 express 문법에 따라서 "콜백함수 넣어서 써라~" 하면 콜백함수 넣어서 쓰면 되는 것이다.

자바스크립트에서 함수를 만들 때 쓸 수 있는 약간 더 쉬운 문법이 있다.

<br>
<br>

```js
app.get('/write', () => {
  어쩌구;
});
```

function이라는 키워드 대신 => 라는 화살표를 이용 가능하다.

보통 ES6라고 부르는 자바스크립트 신 문법인데, 콜백함수를 만들 때 약간 더 코드가 간단해질 수 있어서 선호된다.

그냥 function이라고 쓰는 것과 차이는 딱 하나이다.

함수 내부에서 this라는 키워드의 값이 바뀐다는 특징이 있는데 보통 상황에선 전혀 신경쓸 필요없으니 자유롭게 사용하도록 하자.

<br>
<br>
<br>

# form 데이터를 서버로 전송해보자 1. form 태그 셋팅

HTML의 form 내의 input들에 입력한 데이터들을 서버로 전송할 수 있다.

전송하고 싶다면 여러분이 form 태그에 여러가지 전송 방법들을 명시해야한다.

```html
<form action="/add" method="POST">
  <div class="form-group">
    <label>오늘의 할일</label>
    <input type="text" class="form-control" name="title" />
  </div>
  <div class="form-group">
    <label>날짜</label>
    <input type="text" class="form-control" name="date" />
  </div>
  <button type="submit" class="btn btn-outline-secondary">Submit</button>
</form>
```

폼 전송버튼을 누를 시 /add 라는 경로로 POST 요청을 하는 폼이 완성되었다.

form 태그의 method 속성은 GET/POST 중 어떤 요청을 할 건지 정해주는 부분,

action은 어떤 경로로 요청할건지를 정해주는 부분이다.

알아서 잘 채워넣으면 이제 전송버튼을 누를 때마다 서버에 input에 담긴 데이터들을 전송하게 된다.

화룡점정으로 input마다 name 속성을 이용해 각각의 input에 이름을 써주었다.

폼 전송할 때 input에 이름이 없으면 서버에서 이게 어떤 input에 적혔던 데이터인지 알 수 없으니 적어주자.

<br>
<br>
<br>

# form 데이터를 서버로 전송해보자 2. body-parser 설치

1번까지만 해도 데이터가 잘 전송되긴 하는데, body-parser라는 라이브러리가 있어야

여러분이 보낸 데이터들 처리가 쉽게쉽게 가능하다.

빨리 터미널을 켜서 npm install body-parser 혹은 yarn add body-parser를 하도록 하자.

그리고 여러분 server.js 위쪽에 다음 코드를 추가하자.

```js
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
```

대충 비슷한 코드가 모여있는 곳에 아무데나 박아넣으면 body-parser 설치 끝이다.

<br>
<br>

<span style=color:red>**하지만 2021년 이후로 설치한 프로젝트들은**</span> body-parser 라이브러리가 express에 기본 포함되어있어서

따로 npm으로 설치할 필요가 없다.

```js
app.use(express.urlencoded({ extended: true }));
```

▲ 이 코드만 위쪽에 추가해주시면 됩니다.

<br>
<br>
<br>

# form 데이터를 서버로 전송해보자 3. POST 요청 처리하는 코드짜기

이제 app.get 하던 것이랑 매우 비슷하게 post 요청을 처리해보도록 하자.

이렇게 하면 끝이다.

```js
app.post('/add', function (요청, 응답) {
  console.log(요청.body);
  응답.send('전송완료');
});
```

그럼 누군가가 /add 경로로 post 요청을 할 때

터미널 콘솔창에 요청.body를 출력해볼 수 있다.

요청.body는 여러분이 폼에 입력한 제목과 날짜 데이터가 들어가있을 것이다.

(그리고 응답.send() 라는 함수로 성공했다는 메세지를 브라우저에 전달가능합니다.)

폼에서 서버로 데이터보내기 끝!
