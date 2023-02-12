# 문자 검사하는 가장 쉬운 방법

```js
'문자'.includes('찾을단어');
```

아무 문자나 뒤에 .includes() 붙일 수 있다.

그럼 문자에 찾을 단어가 들어있는지 검사해주고 있으면 true / 없으면 false 남겨준다.

<br>

하지만

\- 한글이 들어있냐

\- 영어가 들어있냐

\- A로 끝나냐

\- 마침표 다음에 영어가 있냐

이런건 includes() 만으로 검사하기 어렵다.

<br>
<br>
<br>

# 정규표현식 (regular expression)

줄여서 정규식은 문자를 검사하고 싶을 때 사용하는 식이다.

"어떤 문자에 'abc'라는 단어가 들어가있냐?" 라고 물어보고 싶을 때 쓰면 된다.

<br>

자바스크립트로 정규식을 어떻게 표현하냐면

```js
/abc/;
```

이게 끝이다.

그러면 이제 abc라는 단어가 있냐~? 라고 물어볼 준비가 된거다.

<br>

그럼 abcdef라는 문자에 abc라는 단어가 있는지 검사해보도록 하자.

```js
/abc/.test('abcdef');
```

/정규식/.test(정규식으로 검사해볼문자) 쓰면 된다.

진짜 들어있으면 true를 남기고 없으면 false를 남겨준다.

<br>
<br>
<br>

# 몇개만 배워보는 정규식 문법

정규식 문법은 너무 많아서 필요할 때 찾아쓰면 족하다.

자주 쓰는 몇개만 알아보도록 하자.

```js
/a/.test('abcde'); //true
```

영어나 한글의 경우 그냥 쓰면 글자가 있는지 없는지 물어볼 수 있다.

<br>
<br>

```js
/[a-d]/.test('aefg')  //true
/[가-다]/.test('다라마바')  //true
```

[ ] 기호를 이용해서 문자 범위를 지정할 수 있다.

[a-z] 는 a부터 z까지 아무문자 하나를 의미한다.

<br>
<br>

```js
/[a-zA-Z]/.test('반가워요')  //false
/[a-zA-Z]/.test('반가워요a') //true
/[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test('반가워요')  //true
```

[a-zA-Z] 이건 아무 알파벳 하나라는 뜻이다.

[ㄱ-ㅎ가-힣ㅏ-ㅣ] 이건 아무 한글 하나라는 뜻이다.

<br>
<br>

```js
/\S/.test('abcde'); //true
```

백슬래시S 는 특수문자 포함 아무문자 1개라는 뜻이다.

자판의 원화기호가 백슬래시이다.

<br>
<br>

```js
/^a/.test('abcde')   //true
/e$/.test('abcde') //true
```

^a 라고 적으면 a로 시작하는지 검사할 수 있다.

e$ 라고 적으면 e로 끝나는지 검사할 수 있다.

<br>
<br>

```js
/(e|f)/.test('abcde'); //true
```

| 이건 or 기호이다.

그래서 위 코드는 e 또는 f중 아무거나 한 문자가 있나 검사 가능 하다.

정규식에선 괄호 맘대로 칠 수 있다.

<br>
<br>

```js
/a+/;
```

\+ 기호를 붙여주면 뒤에 오는 글자들도 a와 일치하면 반복해서 쭉 찾아달라는 뜻이다.

왜냐면 /a/는 a를 다 찾으라는게 아니라 a 한개를 찾으라는 뜻이다.

aaaaa 이런걸 찾고 싶으면 /a+/ 쓰면 된다.

<br>
<br>

```js
/\S+t/;
```

-> 모든 문자 여러개 다음에 t라는 글자가 있냐를 검사해주는 정규식이다.

aaaaat

bbt

이런 것들을 잘 찾아준다.

<br>
<br>
<br>

# 간단히 작성해보는 이메일 정규식

이메일은 어쩌구@어쩌구.어쩌구 이렇게 되어야한다.

모든 문자 사이에 @ 그리고 .이라는 특수문자가 와야한다.

```js
/\S+@\S+\.\S+/;
```

이렇게 쓰면 된다.

\. 이라는 기호는 왜 이렇게 썼냐면 마침표는 정규식에서 특수한 문법이기 때문에

마침표 문법을 쓰는게 아니라 진짜 마침표를 찾아달라라는 의미로 쓰려면 백슬래시를 앞에 붙여야 한다.

<br>
<br>
<br>

# 그럼 폼전송시 이메일 형식 검증은 어떻게 할까?

공백검사랑 별 차이가 없다.

저번 강좌에서 공백검사 부분을 작성했는데 공백검사 부분 대신에

이메일 정규식과 부합하는지 검사를 해주면 된다.

```js
document.querySelector('form').addEventListener('submit', function () {
  const idValue = document.querySelector('#idInput').value;
  if (idValue === '') {
    alert('아이디를 입력해주세요!');
  } else if (!/\S+@\S+\.\S+/.test(idValue)) {
    alert('이메일 형식이 아닙니다!');
  } else if (document.getElementById('pwInput').value === '') {
    alert('비밀번호를 입력해주세요!');
  } else if (document.getElementById('pwInput').value.length < 6) {
    alert('비밀번호는 6자 미만이 될 수 없습니다!!!!!');
  } else if (!/A-Z/.test(document.getElementById('pwInput').value)) {
    alert('비밀번호에 영어 대문자 한개는 반드시 포함되어야 합니다!!!');
  }
});
```

예전 코드를 살짝 업그레이드했다.

\- form 전송시

\- 유저가 `<input>`에 입력한걸 찾아서

\- 정규식으로 이메일 테스트했을 때 false가 나오면

\- 폼 전송을 막거나 alert() 를 띄우거나 맘대로 원하는거 하면 된다.

<br>
<br>
<br>

# 오늘의 숙제 :

폼 전송시 유저가 입력한 비번에 영어 대문자가 적어도 1개 있는지 검사해봅시다.

없으면 alert() 띄우거나 맘대로 합시다.

```js
document.querySelector('form').addEventListener('submit', function () {
  const idValue = document.querySelector('#idInput').value;
  if (idValue === '') {
    alert('아이디를 입력해주세요!');
  } else if (!/\S+@\S+\.\S+/.test(idValue)) {
    alert('이메일 형식이 아닙니다!');
  } else if (document.getElementById('pwInput').value === '') {
    alert('비밀번호를 입력해주세요!');
  } else if (document.getElementById('pwInput').value.length < 6) {
    alert('비밀번호는 6자 미만이 될 수 없습니다!!!!!');
  } else if (!/A-Z/.test(document.getElementById('pwInput').value)) {
    alert('비밀번호에 영어 대문자 한개는 반드시 포함되어야 합니다!!!');
  }
});
```
