# this & arrow function 연습문제 3개

# 1. 간단한 메소드 만들기

**사람**이라는 오브젝트가 하나 있습니다.

이 오브젝트에 sayHi라는 함수를 (메소드를) 하나 추가하고 싶습니다.

<br>

```js
var 사람 = {
  name: '손흥민',
};

사람.sayHi(); //안녕 나는 손흥민
```

위의 코드처럼 `사람.sayHi()`라고 작성하면 콘솔창에 **'안녕 나는 손흥민'** 이라는 글자가 나와야합니다.

'손흥민'이라고 이름을 하드코딩해서 출력하기보다는 실제 내 오브젝트에 있는 name에 해당하는 값이 출력되면 참 좋을 것 같군요.

**Q. sayHi()라는 함수를 어디서 어떻게 만들면 될까요?**

<br>

## ✍️ 풀이

```js
var 사람 = {
  name: '손흥민',
  sayHi: function () {
    console.log('안녕 나는 ' + this.name);
  },
};

사람.sayHi();
```

<br>
<br>
<br>

# 2. 오브젝트 내의 데이터를 전부 더해주는 메소드만들기

오브젝트가 하나 있습니다.

```js
var 자료 = {
  data: [1, 2, 3, 4, 5],
};
```

그런데 이 오브젝트에 `전부더하기()` 라는 함수를 하나 만들어서 사용하고 싶습니다.

<br>

```js
var 자료 = {
  data: [1, 2, 3, 4, 5],
};
자료.전부더하기();
```

위처럼 `자료.전부더하기()`라고 쓰면 `자료.data` 안에 있는 모든 숫자를 더해서 콘솔창에 출력해주어야합니다.

(아마 15가 뜨게 되겠죠?)

**Q. 어떻게 코드를 짜면 될까요?**

**조건) 위에있는 자료라는 object 중괄호 {} 내에 코드 작성 금지**

<br>

## ✍️ 풀이

```js
var 자료 = {
  data: [1, 2, 3, 4, 5],
};

자료.전부더하기 = function () {
  var 합 = 0;
  this.data.forEach(function (a) {
    합 = 합 + a;
  });
  console.log(합);
};
자료.전부더하기();
```

<br>
<br>
<br>

# 3. setTimeout 이용해보기

자바스크립트엔 setTimeout이라는 유용한 함수가 있습니다.

특정 코드나 함수를 X초 후에 실행하고 싶을 때 사용하는 함수입니다.

어떻게 쓰냐면

```js
setTimeout(콜백함수, ms단위의 시간)
```

이렇게 쓰면 됩니다.

예를 들어보면

```js
setTimeout(function () {
  console.log('안녕');
}, 1000);
```

이렇게 한줄 쓰시면 1000ms 후에 왼쪽에 있는 콜백함수 내의 코드를 실행해줍니다.

그럼 1초후에 안녕이 콘솔창에 출력되겠네요.

또는 콜백함수자리에 여러분이 직접 만든 함수를 넣을 수도 있습니다.

역시 예를 들어보면

```js
function 함수() {
  console.log('안녕');
}

setTimeout(함수, 1000);
```

이렇게 콜백함수 대신 내가 미리 만들어놓은 함수의 이름을 적어도 실행됩니다.

다만 콜백함수자리에 내가만들어놓은 함수를 입력하고 싶으면 소괄호는 빼셔야합니다.

setTimeout 개념정리 끝입니다.

**본격 문제들어갑니다.**

버튼을 클릭하면 지금 누른 버튼에 담긴 글자를 출력하는 기능을 만들고 싶어서 이렇게 코드를 짰습니다.

```html
<button id="버튼">버튼이에요</button>

<script>
  document.getElementById('버튼').addEventListener('click', function () {
    console.log(this.innerHTML);
  });
</script>
```

그럼 콘솔창에 '버튼이에요'라는 글자가 출력되죠? 잘 되는군요.

<br>

**Q. 그럼 setTimeout을 이용해서 1초 후에 this.innerHTML을 콘솔창에 출력하고 싶으면 어떻게 코드를 수정해야할까요?**

1초 후에 '버튼이에요'라는 글자가 콘솔창에 등장하면 성공입니다.

<br>

## ✍️ 풀이

```html
<button id="버튼">버튼이에요</button>

<script>
  document.getElementById('버튼').addEventListener('click', function () {
    setTimeout(() => {
      console.log(this.innerHTML);
    }, 1000);
  });
</script>
```
