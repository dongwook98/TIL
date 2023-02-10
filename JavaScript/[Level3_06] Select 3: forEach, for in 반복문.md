# Select 3 : forEach, for in 반복문

오늘은 서버에서 바지 사이즈 데이터 가져와서

그 갯수만큼 `<option>`을 생성해보자.

그래서 다음처럼 코드짜놓고 시작하자.

```html
<script>
  var pants = [28, 30, 32];
  $('.form-select').eq(0).on('input', function(){

    var value = $('.form-select').eq(0).val();
    if (value == '셔츠') {
      $('.form-select').eq(1).removeClass('form-hide');
    }
    else if (value == '바지'){
      $('.form-select').eq(1).removeClass('form-hide');
      $('.form-select').eq(1).html('');
      여기다 무슨 코드 짜야함
    }

  });
</script>
```

맨 위에 pants 라는 변수를 하나 만들고 서버에서 보낸데이터라고 가정해보자.

**pants 데이터 갯수만큼 `<option>`을 생성하고 싶으면** 어떻게 해야할까?

반복문 쓰면 될 것 같다.

<br>
<br>

```html
<script>
  var pants = [28, 30, 32];
  $('.form-select').eq(0).on('input', function(){

    var value = $('.form-select').eq(0).val();
    if (value == '셔츠') {
      $('.form-select').eq(1).removeClass('form-hide');
    }
    else if (value == '바지'){
      $('.form-select').eq(1).removeClass('form-hide');
      $('.form-select').eq(1).html('');
      for (let i = 0; i < pants.length; i++){
        <option>생성해주세요~
      }
    }

  });
</script>
```

▲ 반복문 쓰면 해결된다. pants.length 만큼 반복해달라고 하면 된다.

근데 이거보다 조금 더 쉬운 반복문을 알아보자.

<br>
<br>
<br>

# forEach 반복문

array 자료 뒤에 붙일 수 있는 forEach() 라는 기본함수가 있습니다.

이것도 반복문임

<br>

```js
var pants = [28, 30, 32];
pants.forEach(function () {
  console.log('안녕');
});
```

이렇게 쓰면 pants 안의 데이터 갯수만큼

forEach 콜백함수 안에 있는 코드가 실행된다.

3번 실행된다.

그래서 array 자료 다룰 때 for 반복문 쓰기 귀찮으면 forEach 뒤에 붙여도 된다.

<br>
<br>

**Q. 콜백함수 왜넣어요?**

A. 자바스크립트 forEach 만든 사람이 그렇게 쓰래요

<br>
<br>

```js
var pants = [28, 30, 32];
pants.forEach(function (a, i) {
  console.log(a);
});
```

콜백함수 안에 파라미터 2개까지 작명이 가능한데 (실은 3개까지인데 몰라도 된다.)

첫 파라미터는 **반복문 돌 때 마다 array 안에 있던 하나하나의 데이터**가 되고

둘째 파라미터는 **반복문 돌 때 마다 0부터 1씩 증가하는 정수**가 된다.

<br>
<br>

```html
<script>
  var pants = [28, 30, 32];
  $('.form-select')
    .eq(0)
    .on('input', function () {
      var value = $('.form-select').eq(0).val();
      if (value == '셔츠') {
        $('.form-select').eq(1).removeClass('form-hide');
      } else if (value == '바지') {
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        pants.forEach(function (a) {
          $('.form-select').eq(1).append(`<option>${a}</option>`);
        });
      }
    });
</script>
```

▲ 그래서 아까 코드도 이렇게 바꿔봤다.

이제 pants 라는 서버에서 보낸 데이터가 바뀔 때 마다

거기에 맞게 `<option>`이 생성된다. 변화에 대응이 좋은 코드가 되었다.

<br>
<br>
<br>

# object 자료 다룰 때 for in 반복문 가능

object 자료 갯수만큼 반복문을 돌리고 싶으면

<br>

```js
var obj = { name: 'kim', age: 20 };

for (var key in obj) {
  console.log('안녕');
}
```

for in 반복문 쓰면 된다.

그럼 콘솔창에 '안녕'이 2회 출력된다.

그리고 for in 반복문 쓰면 object 자료 안에 있는 key와 value를 다 출력해볼 수도 있다.

지금 key라고 작명하는 부분은 반복문이 돌 때 마다 object자료 안에 있던 key값이 된다.

<br>
<br>

```js
var obj = { name: 'kim', age: 20 };

for (var key in obj) {
  console.log(key);
}
```

출력해보면 진짜로 name, age 잘 나온다.

key 말고 실제 자료인 value를 출력하고 싶으면

console.log(obj[key]) 이렇게 써보자!

<br>
<br>
<br>

# ✨ 그래서 반복문의 용도는 2개가 있는데 ✨

실은 코드 복사붙여넣기용으로 쓰는게 for 반복문이라 했는데

array나 object 자료 전부 꺼내서 쓰고 싶을 때도 반복문을 쓰면 유용하다.

그래서

1. 코드복붙하고싶으면

2. array, object 자료 다 꺼내고 싶을 때

반복문 사용하면 유용하다.

<br>
<br>
<br>

# arrow function 문법

함수 만드는 다른 문법이 있다. 특히 콜백함수만들때 자주 쓰는 방법인데

```js
var pants = [28, 30, 32];
pants.forEach(function (a) {
  console.log(a);
});

pants.forEach((a) => {
  console.log(a);
});
```

function 키워드 대신 => 화살표를 ( ) 우측에 부착해도 똑같이 함수만들 수 있다.

저걸 arrow function 이라고 한다.

<br>
<br>

```js
pants.forEach((a) => {
  console.log(this);
});
```

arrow function은 파라미터가 하나면 () 소괄호 생략해도 된다.

함수 중괄호 안에 return 한 줄 밖에 없으면 { } 중괄호와 return 동시에 생략해도 된다.

```js
let 함수 = function () {
  console.log('안녕');
};
let 함수 = () => {
  console.log('안녕');
};
```

참고로 함수 이렇게 만들어쓰는 사람도 있다.

이럴 때도 arrow function이 가끔 보인다.

<br>
<br>
<br>

그냥 함수와 arrow function의 기능차이는 하나가 있는데

함수 안에서 this를 써야할 경우

\- 그냥 함수는 함수 안에서 this를 알맞게 재정의해준다.

\- arrow function은 함수 안에서 this를 재정의해주지 않고 바깥에 있던 this를 그대로 쓴다.

그래서 이벤트리스너 콜백함수안에서 this를 써야하면 arrow function 쓰면 의도와 다르게 동작할 수도 있다.

**arrow function에서는 this 사용하지말자**
