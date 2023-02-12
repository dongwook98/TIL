# 숙제1. 페이지 스크롤바 100px 내리면 로고 폰트사이즈 작게

```html
<script>
  $(window).on('scroll', function () {
    if (window.scrollY >= 100) {
      $('.navbar-brand').css('font-size', '20px');
    }
  });
</script>
```

스크롤바 만질 때 마다 코드 실행하고싶으면 스크롤 이벤트리스너 쓰면 된다.

다시 스크롤바 올리면 폰트사이즈 크게만들고 싶으면 어떻게 해야할까

```js
if (window.scrollY < 100) {
  $('.navbar-brand').css('font-size', '30px');
}
```

<br>
<br>
<br>

# 숙제2. 회원약관 박스 거의 끝까지 스크롤하면 alert 띄우기

이것은 저번시간에 div 박스 찾아서

div 박스 스크롤양 + 보이는높이 == 실제높이 비교하면 된다고 했다.

근데 정확히 일치하는 경우는 잘 없어서 등호말고 부등호 이런거 쓰면 된다.

```js
$('.lorem').on('scroll', function () {
  var 스크롤양 = document.querySelector('.lorem').scrollTop;
  var 실제높이 = document.querySelector('.lorem').scrollHeight;
  var 높이 = document.querySelector('.lorem').clientHeight;
  if (스크롤양 + 높이 > 실제높이 - 10) {
    alert('다읽음');
  }
});
```

<br>
<br>
<br>

# 🚨 스크롤 다룰 때 주의점

1. 스크롤이벤트리스너 안의 코드는 1초에 60번 이상 실행된다.

그래서 스크롤 이벤트리스너는 많이 달면 성능저하가 일어나니 스크롤바 1개마다 1개만 쓰자.

<br>

2. 스크롤이벤트리스너 안의 코드는 1초에 여러번 실행되다보니 바닥체크하는 코드도 여러번 실행될 수 있다.

숙제2에서 alert가 2번 뜨고 그럴 수 있다는 뜻이다.

그걸 방지하고 싶으면 구글에 검색해보는 것도 나쁘지않다. 변수같은걸 활용하면 된다.

<br>
<br>
<br>

# 현재 페이지를 끝까지 스크롤했는지 체크하려면?

숙제2랑 똑같이하면 된다.

근데 div 박스를 찾는게 아니라 이번엔 현재페이지를 찾아서

`.scrollTop` `.scrollHeight` `.clientHeight` 붙이면 된다.

현재페이지를 찾으려면

```js
document.querySelector('html').scrollTop; //현재 웹페이지 스크롤양
document.querySelector('html').scrollHeight; //현재 웹페이지 실제높이
document.querySelector('html').clientHeight; //현재 웹페이지 보이는 높이임
```

html 태그 찾으면 된다.

`.scrollTop` 은 너무 길면 `window.scrollY` 써도 똑같다.

<br>

(주의)

1. 웹페이지 scrollHeight 구할 땐 브라우저마다 아주 약간의 오차가있을 수 있어서 테스트해보는게 좋다.

2. 웹페이지 scrollHeight 구하는 코드는 페이지 로드가 완료되고나서 실행해야 정확하다. 그래서 `<body>` 끝나기 전에 적는게 좋다.

<br>
<br>
<br>

# ✨ 오늘의 교훈 ✨

저런거 코드 외워봤자 다음날 다 까먹음

1. 스크롤바 조작할 때 마다 코드실행가능하구나

2. 박스의 숨겨진 실제 높이도 구할 수 있구나

3. 스크롤내린 양도 구할 수 있군

이런거 이해하고 지나가면 충분하다. 문법은 필요할 때 찾아쓰면 된다.
