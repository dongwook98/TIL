# 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개

리액트라고 뭔가 어렵고 복잡하게 코드짜야하고 그런거 아니다.

그냥 기존처럼 html css 짜서 웹페이지 만들어나가면 된다.

그런데 html 대신 JSX라는걸 쓰는데 이거 사용법을 알아보자.

<br>
<br>
<br>

# 리액트프로젝트의 App.js로 들어가자

App.js가 우리의 메인페이지이다.

여기 이미 채워져있던 쓸데없는 html들을 싹 비우고 시작하자.

`<div>` 하나만 남기면 된다.

```js
function App() {
  return <div className='App'>//다지움 ㅅㄱ</div>;
}
```

이제 깔끔한 백지상태에서 시작할 수 있다.

<br>
<br>
<br>

# 본격적으로 블로그 상단 nav를 제작해보자.

간단한 블로그를 만들어볼 것인데 상단메뉴가 있으면 좋을 것 같으니 만들어보자.

리액트 환경이라고 뭔가 다르지 않다.

웹페이지 레이아웃은 전에 html css 짜던대로 하면 된다.

```js
App.js;

function App() {
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
    </div>
  );
}
```

```css
(App.css)

.black-nav {
  background: black;
  width: 100%;
  display: flex;
  color: white;
  padding: 20px;
}
```

CSS 스타일은 App.css 파일 열어서 집어넣으면 된다.

저장 잘 하면 검은색 상단메뉴가 생성된다.

<br>
<br>
<br>

# JSX 문법 1. html에 class 넣을 땐 className

잘보면 평소에 짜던 html/css와 다른 부분이 있다.

스타일을 주기 위한 class명을 넣을 때 class=" " 가 아니라 className=" " 이렇게 쓰는 부분이 좀 다른데

왜냐하면 실은 App.js에 짜고 있는건 html이 아니라 JSX라고 부르는 이상한 언어라서 그렇다.

<br>

원래 리액트환경에서 `<div>`하나 만들고 싶으면 자바스크립트로

`React.createElement('div', null)`

이런 식으로 어렵게 코드짜야한다..💩

근데 그러면 유저들 다 도망가기 때문에 JSX라는 언어를 대신 사용한다.

JSX는 html과 사용방식은 비슷하다.

<br>

근데 JSX는 일종의 자바스크립트라서

자바스크립트에서 사용하는 예약어인 class라는 키워드를 막 사용하면 안된다.

그래서 `class=" "` 넣고 싶으면 className이라고 써야한다.

<br>
<br>
<br>

# JSX 문법 2. 변수를 html에 꽂아넣을 때는 {중괄호}

자바스크립트 변수같은 곳에 있던 자료를

html 중간에 꽂아서 보여주고 싶을 때가 많다.

어떻게 하는지 알아보자.

<br>

```js
function App() {
  let post = '강남 우동 맛집';
  return (
    <div className='App'>
      <div className='black-nav'>
        <div>블로그임</div>
        <div>여기에 저 변수에 있던거 꽂고 싶으면?</div>
      </div>
    </div>
  );
}
```

일단 위에 post라는 변수를 만들어서 잠깐 문자를 저장해놨다.

아무튼 저 let post 안에 있던 자료를 `<div>`안에 꽂아넣고 싶으면 어떻게 할까?

옛날 자바스크립트 문법을 쓴다면 `document.getElementById().innerHTML = ??` 이런 식이었겠지만

리액트에서는 더 쉽게 데이터를 꽂아넣을 수 있다.

<br>
<br>

```js
function App() {
  let post = '강남 우동 맛집';
  return (
    <div className='App'>
      <div className='black-nav'>
        <div>블로그임</div>
        <div>{post}</div>
      </div>
    </div>
  );
}
```

중괄호안에 데이터바인딩하고 싶은 변수명만 담으면 된다.

그럼 미리보기화면에서 `<div>강남 우동 맛집</div>` 요게 출력된다.

<br>
<br>

```js
function App() {
  var data = 'red';
  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 blog</div>
        <div className={data}>안녕하세요</div>
      </div>
    </div>
  );
}
```

온갖 곳에 {} 중괄호를 열어서 변수들을 집어넣을 수 있다.

href, id, className, src 등 여러가지 html 속성들에도 가능하다.

위처럼 쓰면 `<div className="red">` 이렇게 될 것이다.

 <br>

참고로 변수에 있던걸 html에 꽂아넣는 작업을 있어보이는 말로 **데이터바인딩**이라고 한다.

<br>
<br>
<br>

# JSX 문법 3. html에 style 속성 넣고싶으면

`<div style="color : blue">` 이런걸 넣고 싶으면

JSX 상에서는 style={ } 안에 { } 자료형으로 집어넣어야한다.

<br>
<br>

```js
<div style={{ color: 'blue', fontSize: '30px' }}> 글씨 </div>
```

이렇게 넣어야 한다.

\- { 속성명 : '속성값' } 이렇게 넣으면 된다.

\- 근데 font-size 처럼 속성명에 대쉬기호를 쓸 수 없다.

대쉬기호 대신 모든 단어를 붙여써야한다. 붙여쓸 땐 앞글자를 대문자로 치환해야한다. (camelCase)

<br>

css 파일 열기 귀찮을 때 쓰면 된다.
