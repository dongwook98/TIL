# input 이벤트와 change 이벤트

`<input>` 태그에서 발생하는 이벤트들이 있음

input이벤트와 change 이벤트인데 **`<input>` 안에 뭔가 입력할 때 발생**

<br>

```js
document.getElementById('email').addEventListener('input', function () {
  console.log('안녕');
});
```

▲ `<input>`에 입력된 값이 변경될 때 input 이벤트가 발생

`<input>`에 뭐 입력ㄱㄱ 그 때마다 콘솔창에 안녕이 출력

<br>
<br>
<br>

```js
document.getElementById('email').addEventListener('change', function () {
  console.log('안녕');
});
```

▲ `<input>`에 입력된 값이 변경되고 커서를 다른 곳에 찍으면 change 이벤트가 발생

`<input>`에 뭐 입력하고 커서를 다른데 찍어보자 안녕이 출력

<br>

그래서 `<input>` 값이 변경되었을 때 뭔가 코드를 실행하고 싶으면

input, change 이벤트리스너를 활용하자

<br>
<br>
<br>

# true/false 자료

실은 if 조건문 자리에는 == 등호 이런게 아니라 true, false를 넣어야 잘 작동함

```js
if (true) {
  console.log('진짜임');
}
```

진짜로 true 넣으면 if문이 실행 됨

true는 참, false는 거짓을 뜻하는 자료형

개발자말로 **boolean 타입**이라고 부름

<br>

Q. 그럼 1 == 1 이런거 넣어도 if문 잘 작동하는 이유는 뭐임?

A. 1 == 1 쓰면 그 자리에 true 아니면 false 가 자동으로 남음

콘솔창에 1 == 1 출력해보셈

<br>

Q. 타입이 뭐임

A. 자료가 무슨 형식을 가지고 있는지 구분하기 위한 용어

123은 숫자타입 '123'은 문자타입 true는 boolean타입 이렇게 부르고

포켓몬으로 비유하면 불타입 비행타입 그런거랑 비슷

<br>
<br>
<br>

# 다른지 같은지 비교하고 싶으면

console.log(2 != 1)
다름을 비교하고 싶으면 != 쓰면 됨

위 코드는 그래서 true가 콘솔창에 출력

<br>

```js
console.log(2 == '2'); // true

console.log(2 === '2'); // false
```

<br>
<br>
<br>

같다고 비교하려면 == 쓰면 된다고 했는데 실은 === 이것도 있음

== 이건 느슨한 비교

=== 이건 엄격한 비교

== 느슨한 비교는 자료의 타입변환을 지가 알아서 해보고 동일하면 true라고 판정

=== 엄격한 비교는 자료의 타입까지 동일해야 true라고 판정

<br>
<br>
<br>

실은 if문 안에서 true, false 역할을 하는 자료들도 있음

```js
0;

('');

null;

undefined;

NaN;
```

이런 것들은 if문 소괄호 안에서 false랑 같은 역할을 함

```js
0제외 모든 숫자

'아무문자'

[]

{}
```

이런 것들은 if문 소괄호 안에서 true랑 같은 역할

<br>
<br>
<br>

# and/or 연산자

if문 소괄호 안에 <span style="color:red">**조건식을 여러개 동시에 입력하고 싶을 때**</span>가 있음

1 == 1

2 == 2

이런거 동시에 비교해서 참이면 뭔가 코드를 실행하고 싶으면 and/or 기호와 함께 적으면 됨

<br> 
<br>
<br>
 
```js
if (1 == 1 && 2 == 2){
  console.log('안녕')
}
```
&& 기호는 논리학의 and 역할을 해줌

그니까 왼쪽 오른쪽이 둘 다 true면 전체를 true로 바꿔줌

<br>
<br> 
<br>
 
```js
if (1 == 1 && 2 == 3){
  console.log('안녕')
}
```
그럼 이건 안녕이 출력 안 될듯

<br>
<br>
<br> 
 
```js
if (1 == 1 || 2 == 3){
  console.log('안녕')
}
```
|| 기호는 논리학의 or 역할을 해줌

그니까 왼쪽 오른쪽 둘 중 true가 적어도 1개 있으면 전체를 true로 남겨줌
