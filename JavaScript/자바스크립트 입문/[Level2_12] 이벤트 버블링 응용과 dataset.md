# 이벤트 버블링 응용과 dataset

이벤트버블링을 알고있으면 이벤트리스너를 줄여가며 개발 할 수 있다.

전에 만들었던 탭기능을 다시 만들어보자.

전에 만들었던 탭기능 코드

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

<br>
<br>
<br>

# 전에 만들었던 탭기능 함수로 축약해보기

함수쓰면 긴 코드를 짧은 단어하나로 축약 할 수 있다.

그래서 탭만들때 썼던 4줄의 코드를 함수로 축약해볼 것이다.

함수로 넣으면

1. 재사용이 편리하다.

2. 나중에 남이 읽었을 때도 이해하기 쉽다.

```js
for (let i = 0; i < $('.tab-button').length; i++) {
  $('.tab-button')
    .eq(i)
    .on('click', function () {
      탭열기(i);
    });
}

function 탭열기(구멍) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(구멍).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(구멍).addClass('show');
}
```

**Q. 왜 구멍뚫음?**

A. 함수로 코드를 싸맬 때 안에 변수가 들어있으면 변수를 전부 파라미터로 바꾸는게 좋다.

그래야 잘 동작한다. 그래서 i 부분을 전부 파라미터로 바꿨다.

이제 함수 사용할 때

탭열기(0) 이러면 0번 탭이 열린다.

탭열기(1) 이러면 1번 탭이 열린다.

탭열기(2) 이러면 2번 탭이 열린다.

<br>
<br>
<br>

# 이벤트버블링을 알면 이벤트리스너 줄일 수 있다.

지금 탭을 만들 때 이벤트리스너를 3개나 부착했다.(버튼이 3개니까)

근데 잘 생각해보면 이벤트리스너 1개만 써도 충분히 기능구현이 가능하다.

<br>

버튼 3개의 부모인 **`<ul class="list">` 여기에 이벤트리스너 1개만 있어도** 탭기능 만들 수 있다.

왜냐면 이벤트버블링이 항상 일어나기 때문이다.

```js
$('.list').click(function(){
  지금 누른게 버튼 0이면 탭열기(0) 실행
  지금 누른게 버튼 1이면 탭열기(1) 실행
  지금 누른게 버튼 2이면 탭열기(2) 실행
})
```

그래서 이렇게 탭기능 만들어도 잘 동작한다

(jQuery 셀렉터엔 .click() 이라고 써도 간단하게 click 이벤트리스너 부착가능)

<br>
<br>
<br>

**Q. 왜 굳이 이벤트리스너 줄여서 코드 짜는가?**

\- 버튼이 몇십개 있다면 이렇게 짜는게 덜 복잡하고

\- 이벤트리스너를 줄이면 램용량을 절약할 수 있다. 성능개선의 일환이다.

그래서 위처럼 코드짜서 탭기능 완성해보도록 하자.

```js
$('.list').click(function (e) {
  if (e.target == document.querySelectorAll('.tab-button')[0]) {
    탭열기(0);
  }
  if (e.target == document.querySelectorAll('.tab-button')[1]) {
    탭열기(1);
  }
  if (e.target == document.querySelectorAll('.tab-button')[2]) {
    탭열기(2);
  }
});

function 탭열기() {
  생략;
}
```

근데 이러나 저러나 코드 양은 비슷하다.

dataset 문법을 알면 위 코드를 조금 더 짧게 바꿀 수 있다.

<br>
<br>
<br>

# dataset 문법 (잡기술)

```html
<div data-데이터이름="값"></div>
```

html 안에 유저 몰래 정보를 숨겨놓을 수 있다.

데이터이름 아무렇게나 작명하고 값도 넣으면 된다.

<br>
<br>
<br>

```js
document.querySelector().dataset.데이터이름;
```

이러면 html 요소에 숨겨놨던 데이터가 이 자리에 남는다.

<br>
<br>

이런 잡기술을 알고있으면 위에서 만들었던 코드를 조금 더 짧게 축약가능하다.

<br>
<br>

```html
<li class="tab-button" data-id="0">Products</li>
<li class="tab-button orange" data-id="1">Information</li>
<li class="tab-button" data-id="2">Shipping</li>
```

▲ 우선 탭의 버튼들에 이렇게 데이터를 숨겨보자.

그리고 아까 코드를 다시 살펴보면 if문이 3개였다.

버튼0 누르면 탭열기(0) 실행해주세요~

버튼1 누르면 탭열기(1) 실행해주세요~

버튼2 누르면 탭열기(2) 실행해주세요~

<br>
<br>

```js
$('.list').click(function(){
  탭열기(지금누른버튼에 숨어있던 data-id)
});
```

▲ 근데 이렇게 코드짜면 굳이 if문이 필요없이 한 줄로 해결된다.

<br>
<br>

```js
$('.list').click(function (e) {
  탭열기(e.target.dataset.id);
});
```

▲ 지금누른 버튼을 찾고 싶으면 e.target이고

거기 숨어있는 data-id 꺼내고 싶으면 .dataset.id 붙이면 된다.

그래서 위처럼 코드짜도 탭기능 완성이다.

<br>
<br>

dataset 문법이 인터넷익스플로러 11+ 에서 동작하는데 그게 마음에 안들면

옛 브라우저까지 호환 잘되는 jQuery 함수 이용하는 방법도 있다.

`$(셀렉터).data('데이터이름', '값')` 이렇게 저장하고

`$(셀렉터).data('데이터이름')` 이렇게 출력한다.

<br>
<br>
<br>

# ✨ 오늘의 교훈 ✨

1. 함수로 축약할 때 변수같은게 있으면 파라미터로 바꾸는게 좋다.

2. 이벤트리스너 줄이면 이점이 있다.

3. dataset 잡기술 알면 이벤트리스너 적게 사용할 때 내가 뭐 눌렀는지 쉽게 파악할 수도 있다.
