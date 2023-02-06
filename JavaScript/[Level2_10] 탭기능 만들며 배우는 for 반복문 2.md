# 숙제로 해오라던 탭기능 완성해보기

- 버튼0 누르면

1. 버튼0,1,2에 붙어있던 orange 클래스명 전부 제거하라고 코드 3줄 짜기

2. 버튼0에 orange 클래스명 부착

3. 박스0,1,2에 붙어있던 show 클래스명 전부 제거하라고 코드 3줄 짜기

4. 박스0에 show 클래스명 부착

그대로 코드짜면 된다고 했다.

```js
$('.tab-button')
  .eq(0)
  .on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show');
  });

$('.tab-button')
  .eq(1)
  .on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(1).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(1).addClass('show');
  });

$('.tab-button')
  .eq(2)
  .on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(2).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(2).addClass('show');
  });
```

<br>
<br>
<br>

# 좋은 관습 : 반복적인 셀렉터는 변수에 넣어서 쓰기

위 숙제에서 보면 비슷한 셀렉터가 매우 많이 등장한다.

**셀렉터 문법은 기본적으로 작동시간이 오래걸립니다.**

셀렉터 하나 쓸 때 마다 html을 쭉 읽고 찾아야해서 오래걸리는 것이다.

html이 길고 복잡할 수록 더 오래걸린다.

그래서 저게 반복적으로 등장하면 그냥 변수에 넣어서 쓰자.

querySelector 도 마찬가지이다.

<br>

```js
var 버튼 = $('.tab-button');

버튼.eq(0).on('click', function () {
  버튼.removeClass('orange');
  버튼.eq(0).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(0).addClass('show');
});
```

이런 식으로 바꿔버리면 셀렉터 3번 쓰던걸 1번으로 줄일 수 있어서 성능적 이점이 있다.

하지만 굳이 성능 이런거 따지는 사람 별로 없다..

<br>
<br>
<br>

# 코드 복붙하고 싶으면 for 반복문

지금 탭기능만든거 잘 보면 비슷한 코드덩어리 6줄이 3번이나 반복되고 있다.

비슷한 코드를 발견하면 굳이 손수 복사붙여넣기할 필요없이 for 반복문 쓰면 쉽게 복붙해준다.

```js
for (횟수){
  복붙할 코드
}
```

이렇게 쓰면 안의 코드를 복붙해준다.

실은 복붙이라기보다 반복실행이 맞는데 결과는 똑같으니 복붙이라고 하자.

횟수넣는 부분은 이렇게 써야한다.

<br>

```js
for (var i = 0; i < 3; i++) {
  console.log('안녕');
}
```

이러면 console.log('안녕') 이게 3번 복사 붙여넣기 된다.

왜 3번이냐면

**i를 0부터 시작해서 / i에 1씩 더해가면서 복붙해라 / 근데 i < 3 까지**

라는 뜻이라 3번이다.

<br>

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EC%BA%A1%EC%B2%981.png" width="200">

▲ 표로 그리면 이렇게 된다.

<br>

```js
for (var i = 0; i < 3; i++) {
  console.log(i);
}
```

진짜 i가 그렇게 변하는지 궁금하면 출력해보자.

출력해보면 진짜로 0, 1, 2로 변한다.

그리고 i가 3이 될 때 복사붙여넣기를 중지해준다.

<br>
<br>
<br>

# for 반복문으로 탭기능 코드 줄여보기

그래서 코드가 너무 길거나 그러면 for 쓰면 된다.

for 문법은 언제나 옵션일 뿐이라 쓰기싫으면 안써도 된다. 안써도 모든기능 구현가능!

하지만 배운 기념으로 아까 길게 짰던 탭기능을 for 이용해서 간단하게 만들어보자.

```js
$('.tab-button')
  .eq(0)
  .on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show');
  });
```

▲ 지금만든 탭기능은 이 덩어리가 3번이나 반복된다.

반복될 때 마다 0 부분이 1과 2로 바뀌긴 하지만 아무튼 비슷하니까

반복문안에 넣어서 코드를 쉽게 복사 붙여넣기해보자.

<br>
<br>
<br>

```js
for (var i = 0; i < 3; i++) {
  $('.tab-button')
    .eq(i)
    .on('click', function () {
      $('.tab-button').removeClass('orange');
      $('.tab-button').eq(i).addClass('orange');
      $('.tab-content').removeClass('show');
      $('.tab-content').eq(i).addClass('show');
    });
}
```

▲ 이러면 완성

아까랑 똑같이 탭기능이 동작하지 않을것이다..!
<br>
<br>
<br>

실은 for 반복문 사용할 때 변수를 var i 말고 let i로 바꿔야 잘된다.

let으로 바꾸면 탭 완성이다.

<br>

## var 쓰면 안되고 let 쓰면 잘되는 이유????

위 코드는 제대로 작동하지 않는데

컴퓨터의 입장이 되어서 위 코드를 읽으면 이해가 쉽다.

<br>

0. 컴퓨터는 위에서부터 한줄한줄 코드를 해석한다.

1. for 반복문을 발견해서 안에 있는 코드를 반복실행하려고 한다.

2. 이벤트리스너를 만난다. 이벤트리스너 안의 코드는 바로 실행 안된다. 사용자가 버튼을 클릭시 실행되는 코드이다.

그래서 **이벤트리스너 내의 4줄 코드는 아직 실행하지 않고 지나간다.**

그런 식으로 반복문 안의 코드를 3번 실행한다.

<br>

3. 그리고 반복문 끝나서 var i 변수는 3이 되어있다.

4. 반복문이 다 돌고난 후 한참 후에, 사용자가 버튼0을 클릭한다. 그럼 컴퓨터는 이벤트리스너 안의 코드 4줄을 실행시켜야한다.

5. 근데 i 라는 변수를 발견한다.

```js
$('.tab-button').eq(i).addClass('orange');
$('.tab-content').eq(i).addClass('show');
```

▲ 컴퓨터는 변수를 발견하면 근처에서 변수를 찾아서 채우려는 습성이 있다.

그래서 주변을 살펴보니 반복문을 다 돌고난 var i라는 변수가 3이 되어있는걸 찾아낸다. 그걸 쓴다.

(반복문이 다 돌고난 후라서 var i라는 변수는 3이 되어 남아있다.)

<br>

6. 하지만 $('.tab-button').eq(3) 이런건 없다. (4번 버튼은 없다!)

7. 그래서 에러를 낸다.

<br>

근데 let 변수를 사용하면 변수(포스트잇)이 for 바깥이 아니라 안쪽에 생성된다.

<br>

더 쉽게 그림으로 비교해보자면

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EA%B7%B8%EB%A6%BC1.png" width="400">

<br>

**for 안에서 var i = 0 쓰면**

\- var 변수는 범위가 function이다.

\- var i 들어있는 포스트잇은 for 바깥에 생성된다.

<br>

**for 안에서 let i = 0 쓰면**

\- let 변수는 범위가 { } 이다.

\- let i 들어있는 포스트잇은 for 안쪽에 3개 생성된다.

그리고 컴퓨터는 변수가져다쓸 때 가까운거 가져다 쓰려고 한다.

그냥 그렇게 동작해서 그렇다.

<br>
<br>
<br>

# 확장성있는 코드로 바꾸기

내 코드가 좋은 코드인지 모르겠으면 4가지를 체크해보자.

1. 원하는 기능이 잘 구현되었는가

2. 확장성좋은가

3. 나중에 관리가 쉬울 것인가

4. 성능문제 없는가

<br>

위에서 짠 탭기능도 확장성을 한번 잡아보자.

<br>

Q. 지금 탭이 3개면 잘 동작하지만 4개 5개가 되면 잘 동작하지 않을것이다.

탭이 4개나 5개로 바뀌어도 알아서 잘 동작하는 코드가 되려면 현재 코드를 어떻게 수정하면 될까?

```js
for (let i = 0; i < $('.tab-button').length; i++) {
  $('.tab-button')
    .eq(i)
    .on('click', function () {
      $('.tab-button').removeClass('orange');
      $('.tab-button').eq(i).addClass('orange');
      $('.tab-content').removeClass('show');
      $('.tab-content').eq(i).addClass('show');
    });
}
```

여러개 찾아주는 셀렉터로 html 요소 찾은 다음에 .length 붙이면 갯수를 세어준다.

저러면 이제 버튼이 5개면 반복문도 5번 돌겠고 그럼 버튼마다 잘 기능이 실행될 것이다.

<br>
<br>
<br>

# ✨ 오늘의 교훈 ✨

for 문법의 용도를 잘 기억해두자.

비슷한 코드들을 직접 복붙하는게 귀찮으면 for 반복문을 쓰는 것일 뿐이지

for 부터 써놓고 무슨 코드를 채울지 고민하고 그러면 안된다.
