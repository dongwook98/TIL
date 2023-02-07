# 중요한 데이터는 변수말고 state에 담습니다

변수에 잠깐 데이터 저장하고 html에 {데이터바인딩}도 할 수 있다고 했는데

중요한 데이터를 저장할 땐 변수 대신 state를 만들어쓴다.

state는 왜 쓰는지, state는 어떻게 만들어서 데이터를 저장하는지 알아보자.

<br>
<br>
<br>

# 일단 블로그 글 레이아웃을 만들어보자

```js
function App() {
  let posts = '강남 우동 맛집';
  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <div className='list'>
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}
```

```css
(App.css)

div {
  box-sizing: border-box;
}
.list {
  text-align: left;
  padding-left: 20px;
  border-bottom: 1px solid grey;
}
```

대충 이렇게 디자인했다.

그럼 메인페이지에 멋진 블로그 글목록이 하나 생성된다.

<br>
<br>
<br>

# state 만드는 법

이전 강의에서는 그냥 let post = '어쩌구' 이렇게 변수에 데이터를 저장했었는데

리액트에서는 변수 말고 state를 만들어서 데이터를 저장해둘 수 있다.

이번엔 state를 이용해 데이터를 잠깐 저장해보도록 하자.

```js
import { useState } from 'react';
import './App.css';

function App() {
  let [a, b] = useState('남자 코트 추천');
  let posts = '강남 우동 맛집';
  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <div className='list'>
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}
```

맨 윗줄에 `import {useState} from 'react'` 하고

원하는 곳에서 `useState('보관할 자료')` 쓰면 state에 자료를 잠깐 저장할 수 있다.

그리고 저장한 자료를 나중에 쓰고 싶으면

`let [a,b] = useState('남자 코트 추천');`

a 자리에 state 이름을 자유롭게 작명한 다음 나중에 자유롭게 사용하면 된다.

<br>

### 🧩 **(참고)**

let [a,b] = useState('남자 코트 추천'); 에서 사용한 문법

자바스크립트 destructuring 문법인데

내가 array 안에 있는 데이터들을 변수로 쉽게 저장하고 싶으면 쓰는 문법이다.

<br>

예를 들어서 ['Kim', 20] 이렇게 생긴 array 자료를 만들어놨는데

['Kim', 20] 에서 Kim이랑 20이라는 자료를 각각 변수에 저장하고 싶으면

```js
let array = ['Kim', 20];

let name = array[0];
let age = array[1];
```

대충 이렇게 해도 되는데

<br>
<br>

```js
let [name, age] = ['Kim', 20];
```

요즘 사람은 이렇게 한다.

그럼 각각 name = 'Kim', age = 20 이라는 변수가 생성된다.

귀찮게 등호여러번 쓸 필요 없이 **왼쪽 오른쪽 형식을 똑같이 맞춰주면** 자동으로 알아서 변수가 생성된다.

이게 변수만들 때 쓰는 destructuring 문법이다.

익숙하지 않아도 리액트 사용을 위해 일단 외우는게 중요하다.

<br>
<br>

그래서 리액트로 다시 돌아가서

useState()를 쓰면 그 자리에 [데이터1, 데이터2] 이렇게 생긴 이상한 array가 남는다.

데이터1 자리엔 '남자 코트 추천' 같은 자료가 들어있고

데이터2 자리엔 state변경을 도와주는 함수가 들어있다.

<br>

그 데이터들을 각각 변수로 빼고 싶으면

let [a, b] = useState('남자 코트 추천')

이러면 되는 것일 뿐이다.

<br>
<br>
<br>

변수명을 약간 더 직관적으로 작명하면

```js
let [글제목, b] = useState('남자 코트 추천');
```

이렇게 하면 조금 더 직관적으로 이해 할 수 있다.

글제목이라는 변수에는 '남자 코트 추천' 이라는 자료가 들어간댔으니

한번 html에 중괄호 {글제목} 넣어보자.

<br>
<br>

```js
function App() {
  let [글제목, b] = useState('남자 코트 추천');
  let posts = '강남 우동 맛집';
  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <div className='list'>
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}
```

이렇게 짜고 저장해보면 진짜 글제목 부분에 '남자 코트 추천'이 나온다.

그래서 결론은 리액트에선 **일반 변수대신 state 이용해도 자료를 잠깐 저장해둘 수 있다**는거다.

<br>
<br>
<br>

# ✨ 변수 말고 state에 데이터 저장해서 쓰는 이유 ✨

새로운 문법을 배웠으면 이걸 어디에 쓸 지 생각해봐야한다.

그걸 알아야 나중에 혼자서 코드짤 때도 자신있게 state를 가져다 쓸 것이다.

<br>

잘 생각해보면 state도 용도는 그냥 변수랑 똑같다. 자료 잠깐 보관하는게 끝인데

그럼 변수 만들어 쓰면 되지 왜 굳이 state 만들어쓸까??

state는 변동사항이 생기면 state쓰는 html도 <span style="color: red">**자동으로 재렌더링**</span> 해준다.

<br>
<br>

```js
function App() {
  let post = '강남 우동 맛집';

  return <h4>{post}</h4>;
}
```

▲ let post 변수에 있던걸 {post} 이렇게 데이터바인딩 해놨다고 가정해보자.

근데 갑자기 post 변수에 있던걸 '강남 우동 맛집' -> '강남 고기 맛집' 이렇게 바꿨다.

그 변경사항도 html에 반영되게 하고 싶으면 어떡해야할까??

직접 우리가 "변수내용 바뀌었으니까 html도 고쳐주세요"라고 귀찮게 코드짜야 한다.

쌩자바스크립트는 원래 그래야 한다.

```js
function App() {
  let [글제목, b] = useState('남자 코트 추천');

  return <h4>{글제목}</h4>;
}
```

▲ 이번엔 state를 하나 만들어서 {글제목} 이렇게 데이터바인딩 해놨다고 가정해보자.

근데 갑자기 state에 있던걸 '남자 코트 추천' -> '여자 코트 추천' 이렇게 바꿨다.

그 변경사항도 html에 반영되게 하고 싶으면 어떻게 해야할까??

state자료는 그럴 필요 없다. 우리가 개입 안해도 자동으로 html도 바뀐다.

state는 변경이 일어나면 state가 포함된 html을 <span style="color:red">**자동으로 재렌더링**</span> 해줘서 그렇다.

<br>
<br>

그럼 뭐가 좋을까??

\- UI 기능 개발도 매우 편리해지고

\- 사이트가 스무스하게 동작한다.

<br>
<br>

**Q. 그럼 블로그 로고 같은 그런 데이터도 state로 만들어두고 {데이터바인딩} 할까요?**

A. 그래도 된다. 하지만 블로그 로고명은 거의 바뀌지 않으므로

바뀌지 않는 데이터들은 state로 굳이 저장할 필요가 없다.

state의 가장 큰 장점은 state가 변경될 때마다 자동으로 state와 관련된 html이 재렌더링이 된다는 것인데

로고명은 거의 바뀔 일이 없으니 의미가 없다.

state는 상품명, 글제목, 가격 이런것 처럼 자주 변할 것 같은 데이터들을 저장하는게 좋은 관습이다.

<br>
<br>
<br>

오늘 수업을 정리해보자면

**자주변경될 것 같은 데이터**들은 state에 저장했다가 html에 {데이터바인딩} 해놓자

1. 변경할 일이 없는 데이터들

2. 굳이 html에 표기가 필요없는 데이터들은 그냥 변수에 저장해도 된다.

<br>
<br>

실은 지금은 변수나 state나 별 차이 없어보이는데

다음 강의에 state 데이터를 변경하는 법을 한번 배워서 진짜 앱처럼 스무스하게 바뀌는지 실험해보자

<br>
<br>
<br>

# 오늘의 숙제 :

<img src="https://codingapple.com/wp-content/uploads/2020/04/%EC%BA%A1%EC%B2%9842332.png" width="200">

위 사진처럼 블로그 글 목록 3개를 html 레이앗울 잘 짜서 만들어보고

제목부분에 들어갈 3개의 데이터는 state에 저장해본 후에 html에 집어넣어보십시오(데이터바인딩하세요)

<br>

## ✍️ 풀이

```js
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, b] = useState([
    '리액트를 쓰는 이유',
    '자바스크립트의 역사',
    '프론트엔드란?',
  ]);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4 style={{ color: 'skyblue', fontSize: '20px' }}>동욱의 블로그</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}
```
