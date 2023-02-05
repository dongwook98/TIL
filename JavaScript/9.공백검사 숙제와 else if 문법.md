# 전송버튼 누르면 공백체크하라던 숙제

1. 전송버튼누르면

2. 저기 input에 입력한 값이 공백인 경우 알림 띄우기

```js
$('form').on('submit', function(){
  input에 입력한 값이 공백인 경우 알림 띄우기~~
});
```

▲ 1번은 이렇게 했는데

버튼에 click 이벤트리스너 달아도 되고 `<form>`태그 찾아서 **submit 이벤트리스너 달아도 됨**

똑같이 동작함. 왜냐면 폼전송이 되면 `<form>` 태그에서 **submit 이벤트도 발생**

<br>

원하는 html을 태그명으로 찾고 싶으면 마침표나 # 없이 $('태그명')만 적으면 됨

<br>
<br>
<br>

```js
$('form').on('submit', function(){
  if (input에 입력한 값이 공백) {
    alert('아이디 입력하쇼');
  }
});
```

▲ 2번은 이렇게 했는데

근데 input에 입력한 값을 어떻게 찾는지는 배운 적이 없어서 구글찾아봄

그랬더니 document.getElementById('인풋태그찾고').value 쓰면 됨

진짜 유저가 입력한 값이 나오나 콘솔창에 한번 실험해보자

크롬 개발자 도구 활용 하자

```js
$('form').on('submit', function () {
  if (document.getElementById('email').value == '') {
    alert('아이디 입력하쇼');
  }
});
```

<br>
<br>
<br>

## 폼 전송 막는 법

```js
$('form').on('submit', function (e) {
  if (document.getElementById('email').value == '') {
    e.preventDefault();
    alert('아이디 입력하쇼');
  }
});
```

나중에 배울 것인데

이벤트리스너 콜백함수에 e라는 파라미터 추가해주고

e.preventDefault() 라고 쓰면 폼전송이 안됨

<br>
<br>
<br>

## else if 문법

```js
if (1 == 3) {
  console.log('맞아요1');
} else if (3 == 3) {
  console.log('맞아요2');
}
```

else if 뜻은 "그게아니면 만약에" 라는 뜻

그래서 1 == 3 비교해보고 그게 아니면 3 == 3 비교해보고 이게 참이면 맞아요2를 출력해줌

```js
if (1 == 3) {
  console.log('맞아요1');
} else if (3 == 3) {
  console.log('맞아요2');
} else if (4 == 4) {
  console.log('맞아요3');
}
```

이 코드는 콘솔창에 무엇이 출력될까요? => '맞아요2' 출력

else if 문의 경우 else 문의 특징도 가지고 있어서

**조건식이 참이면 뒤에오는 else if문은 실행하지 않음**

<br>
<br>
<br>

```js
if (1 == 3) {
  console.log('맞아요1');
} else if (3 == 3) {
  console.log('맞아요2');
}
```

```js
if (1 == 3) {
  console.log('맞아요1');
}
if (3 == 3) {
  console.log('맞아요2');
}
```

굳이 위처럼 else if 문 안쓰고도 if문 2개만 써도 똑같은 기능을 구현 가능

그러면 else if 문은 왜 있는 문법임?

<br>

if문만 2개 있으면

-> 위에 있는 if문이 참이든 아니든 **둘째 if문도 항상 실행됨**

<br>

if + else if가 있으면

-> else 덕분에 **위의 조건식이 참이면 else 뒤는 스킵**

<br>

그래서 조건식을 여러번 검사하는데 중간에 참이 나올 경우

코드실행을 중단하고 싶으면 else if 쓰면 됨

<br>
<br>
<br>

# 오늘의 숙제 :

1. 전송버튼 누를 때 아이디랑 패스워드 둘 다 공백검사하려면?

2. 전송버튼 누를 때 입력한 비번이 6자 미만이면 알림띄우기

### 풀이

조건식을 여러개 검사하고 앞 조건식이 참일 경우에 뒤는 코드실행이 안되게 하기 위해

else if 문 사용이 적합함

````html
<script>
  document.querySelector('form').addEventListener('submit', function () {
    const idValue = document.querySelector('.form-control').value;
    if (idValue === '') {
      alert('아이디를 입력해주세요!');
    } else if (document.getElementById('pwInput').value === '') {
      alert('비밀번호를 입력해주세요!');
    } else if (document.getElementById('pwInput').value.length < 6) {
      alert('비밀번호는 6자 미만이 될 수 없습니다!!!!!');
    }
  });
</script>
```
````
