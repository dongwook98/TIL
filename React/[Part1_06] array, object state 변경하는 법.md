# array, object state 변경하는 법

지난 숙제를 보면서

array,object state 변경하는 법을 알아보자.

```js
function App() {
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);

  return (
    <button
      onClick={() => {
        글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학']);
      }}
    >
      {' '}
      수정버튼{' '}
    </button>
  );
}
```

이러면 숙제 끝이다. 버튼 누르면 첫 글제목 바뀐다.

state 변경함수는 () 안에 넣은걸로 기존 state를 갈아치워주니까 저렇게 집어넣으면 된다.

<br>
<br>
<br>

# 코드 확장성 늘리기

위 코드는 확장성이 부족하다.

[] 안에 글이 3개밖에 없어서 그렇지 글이 100개 들어있으면

onClick 안의 코드도 매우 길어질 것이다.

그러니까 기존 state를 다 복붙하지말고

기존 state를 첫 글만 살짝 바꿔서 state변경함수에 집어넣는 식으로 개발해보자.

<br>

```js
function App() {
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);

  return (
    <button
      onClick={() => {
        글제목[0] = '여자코트 추천';
        글제목변경(글제목);
      }}
    >
      수정버튼
    </button>
  );
}
```

이래도 될 것같다.(안됨)

array 자료안의 X번째 항목을 변경하고 싶으면

array자료[X] = '바꿀값' 이렇게 하면 된다.

그래서 자료를 바꾸고 저기 state변경함수에 집어넣은 것이다.

근데 이런거보다 더 나은 방법이 하나 있는데

<br>

```js
function App() {
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);

  return (
    <button
      onClick={() => {
        let copy = 글제목;
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}
    >
      수정버튼
    </button>
  );
}
```

array, object 자료 다룰 때는 원본 데이터를 직접 조작하는 것보다는

**기존값은 보존해주는 식으로 코드짜는게** 좋은관습이다.

(왜냐하면 원본 막 바꿔버렸을 때 갑자기 원본이 필요해질수도 있기 때문)

그래서 let copy 같은 변수에다가 기존 array를 복사해놓고

그걸 조작하는 식으로 코드짜면 더 안전하다.

<br>

근데 버튼 눌러도 글제목이 안바뀐다.💩

<br>
<br>

```js
function App() {
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);

  return (
    <button
      onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}
    >
      수정버튼
    </button>
  );
}
```

이러면 제대로 동작한다.

동작원리를 알아보자.

<br>
<br>
<br>

# state 변경함수 동작원리

state 변경함수를 쓸 때

**기존state === 신규state 이렇게 먼저 검사해본다.**

그래서 같으면 state 변경을 해주지 않는다.

그래서 위 코드에서도 글제목변경(copy)해도

copy라는 변수가 기존state와 같아서 변경을 안해준 것이다.

<br>

Q. 잉 copy라는 변수랑 기존 state랑 안에 있는 자료가 다른데 왜 같다고해요?

A. 기존 state는 '남자코트 추천'

copy에는 '여자코트 추천'이 들어있지만

실은 기존state === copy 비교해보면 같다고 나온다.

왜일까??

<br>
<br>
<br>

# array/object 동작원리

<img src="https://codingapple.com/wp-content/uploads/2020/04/%EC%BA%A1%EC%B2%98423134.png" width="300">

1. 자바스크립트는 array/object 자료를 하나 만들면

예를 들어서 let arr = [1,2,3] 이렇게 만들면

[1,2,3] 자료는 램이라는 가상공간에 몰래 저장되고

let arr 변수엔 그 자료가 어디있는지 가리키는 **화살표(메모리주소)만 담겨있다.**

<br>
<br>

2. 그래서 array/object 자료를 복사하면 이상한 일이 일어나는데

예를 들면

```js
let data1 = [1, 2, 3];
let data2 = data1; //복사문법임
```

이런 식으로 사용하면 복사가 된다.

data1에 있던 자료를 data2에 복사한다는 뜻이다.

그럼 data2 출력해보면 [1,2,3] 이게 잘 나온.

근데 data1과 data2는 각각 [1,2,3]을 별개로 저장하는게 아니라

**data1과 data2는 똑같은 값을 공유한다.**

data1을 변경하면 data2도 자동으로 변경된다.(충격⚡️)

<br>

왜냐하면 변수에는 화살표(메모리주소)만 저장되니까

그래서 방금은 화살표를 복사한 것이다.

그래서 data1, data2는 똑같은 화살표를 가지게 된다. 같은 자료를 가리킴

<br>
<br>

3. 그래서 같은 화살표를 가지고 있는 변수끼리는 등호로 비교해도 똑같다고 나온다.

```js
let data1 = [1, 2, 3];
let data2 = data1; //복사
data2[0] = 1000; //data2 내부 변경
console.log(data2 === data1); //true
```

자세한건 javascript reference data type 이라고 검색해서 추가학습 하자.

<br>
<br>

```js
let copy = 글제목;
copy[0] = '여자코트 추천';
글제목변경(copy);
```

그래서 아까처럼 이렇게하면

컴퓨터는 copy와 기존 글제목 state는 똑같다고 생각하기 때문에 (화살표가 똑같아서)

state 변경을 안해준다.

<br>
<br>

```js
let copy = [...글제목];
copy[0] = '여자코트 추천';
글제목변경(copy);
```

이러면 잘 된다. 화살표(메모리주소)가 달라지는 문법이라 그렇다.

<br>

**Q. 저기 점3개 뭐에요?**

A. spread operator 라고하는 문법인데

array나 object 자료형 왼쪽에 붙일 수 있으며

뜻은 별거없고 **괄호를 벗겨주세요~** 라는 뜻이다.

<br>

...[1,2,3] 이렇게 쓰면

그 자리에 1,2,3 이 남는다. 걍 괄호 벗기기용 연산자이다.

근데 두번째 용도도 있는데 array나 object 자료형을 복사할 때 많이 사용한다.

<br>

```js
let data1 = [1, 2, 3];
let data2 = [...data1];
console.log(data1 === data2); //false 나올듯
```

그냥 data1에 있던 자료들을 괄호 벗긴담에 다시 array로 만들어주세요~ 라고 사용하면

화살표가 달라진다. 새로운 array로 인식한다.

그래서 그렇게 하면 화살표가 다른 완전 **독립적인 array 복사본을 생성해줄 수 있다.**

object 자료형도 마찬가지이다.

그리고 독립적인 사본을 shallow copy 아니면 deep copy 라고 한다.

<br>
<br>
<br>

# 오늘의 정리

리액트에서 array/object state를 수정하고 싶으면

독립적인 카피본을 만들어서 수정하는게 좋다.

[...기존state]

{...기존state}

이렇게 하면 독립적인 카피가 하나 생성된다.

<br>
<br>
<br>

# 오늘의 숙제 :

응용문제 : 가나다순 정렬버튼과 기능 만들기

<br>

버튼누르면 글제목이 가나다순으로 정렬되는 기능을 만들어봅시다.

힌트를 드리자면

html을 어떻게 정렬할까 고민안해도 되고 글제목 state를 가나다순으로 정렬만 하면 됩니다.

왜냐면 state 변경하면 관련된 html은 자동으로 재렌더링 되니까요

<br>

## ✍️ 풀이

```js
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([
    '자바스크립트의 역사',
    '리액트를 쓰는 이유',
    '프론트엔드란?',
  ]);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className='App'>
      ...생략
      <button
        onClick={() => {
          let align = [...글제목];
          align.sort();
          글제목변경(align);
        }}
      >
        가나다순정렬
      </button>
      ...생략
    </div>
  );
}
```

1. state변경함수 사용하기위해 spread문법으로 화살표(메모리주소) 변경

2. 가나다 정렬

<img src="https://user-images.githubusercontent.com/119502777/217466100-1b52ea4d-ce79-4dcf-a66c-365b5f96dcd0.gif" width="250">
