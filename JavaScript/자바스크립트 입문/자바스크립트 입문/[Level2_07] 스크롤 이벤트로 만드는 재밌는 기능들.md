# 문제 1. 스크롤바 100px 내리면 로고 폰트사이즈 작게 만들기

그런 재밌는 애니메이션을 만들어보자.

```css
.navbar {
  position: fixed;
  width: 100%;
  z-index: 5;
}
.navbar-brand {
  font-size: 30px;
  transition: all 1s;
}
```

일단 상단메뉴는 상단 고정하고

로고 폰트사이즈를 키운 채로 시작하자.

그리고 스크롤바를 100px 정도 내리면 폰트사이즈를 줄여보자.

그럼 스크롤바를 얼마나 내렸는지 알 수 있어야겠다.

<br>
<br>
<br>

# 스크롤 이벤트리스너

```js
window.addEventListener('scroll', function () {
  console.log('안녕');
});
```

스크롤바를 조작하면 scroll 이벤트가 발생한다.

그래서 scroll 이벤트리스너를 전체 페이지에 달면

전체 페이지를 스크롤할 때마다 원하는 코드를 실행할 수 있다.

진짜 스크롤바 만질 때 마다 '안녕' 출력된다.

<br>

참고로 window는 그냥 전체 페이지를 의미한다.

실은 document도 전체 페이지이다.

window가 약간 더 큰 개념인데 scroll 이벤트리스너는 관습적으로 window에 붙인다.

<br>
<br>
<br>

# 스크롤 관련 유용한 기능들

스크롤 이벤트리스너안에서 쓰는 유용한 기능들이 몇개 있습니다.

```js
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
});
```

window.scrollY 사용하면 현재 페이지를 얼마나 위에서 부터 스크롤했는지 px 단위로 알려준다.

매우 유용하다.

window.scrollX 는 가로로 얼마나 스크롤했는지 알려준다. (가로 스크롤바가 있으면)

<br>
<br>
<br>

```js
window.scrollTo(0, 100);
```

window.scrollTo(x, y) 실행하면 강제로 스크롤바를 움직일 수 있다.

위 코드는 **위에서부터 100px 위치로 스크롤**해준다.

<br>
<br>
<br>

```js
window.scrollBy(0, 100);
```

window.scrollBy(x, y) 실행하면 현재 위치에서부터 스크롤해준다.

위 코드는 **현재 위치에서부터 +100px 만큼 스크롤**해준다.

<br>

근데 원래 저거 실행하면 스크롤 위치가 순간이동 해야되는데

bootstrap을 설치했을 경우 이상하게 천천히 이동할 수 있다.

그게 싫으면 `:root { scroll-behavior : auto }` 이걸 css 파일 맨 위에 추가하자.

<br>
<br>
<br>

```js
$(window).on('scroll', function () {
  $(window).scrollTop();
});
```

jQuery 버전은 더 짧다.

`$(window).scrollTop()` 이거 쓰면 아까처럼 현재 페이지 스크롤 양을 알려준다.

근데 간편한건 `$(window).scrollTop(100)` 이러면 페이지 강제이동도 해준다.

<br>
<br>
<br>

# 문제 2. 박스 끝까지 스크롤시 알림띄우기

<img src="https://user-images.githubusercontent.com/119502777/216991100-08952c16-4ca6-4776-b3b6-46617e23f62f.png" width="200">

회원약관인데 이 박스를 끝까지 스크롤하면 alert() 이런걸 띄울려한다.

그럼 코드를 어떻게 짜야할까?

<br>

**div 스크롤바 내린양 == div 실제높이일 이면 alert 띄워주세요~**

이렇게 짜면 된다.

"페이지 스크롤바 내린 양" 구하는건 배웠는데

"div 박스 스크롤바 내린 양" 구하는 법은 안배웠다.

<br>
<br>
<br>

# div 박스의 스크롤바 내린 양은

박스를 셀렉터로 찾고 .scrollTop 붙이면 스크롤바를 위에서 부터 얼마나 내렸는지 알려준다.

```js
$('.lorem').on('scroll', function () {
  var 스크롤양 = document.querySelector('.lorem').scrollTop;
  console.log(스크롤양);
});
```

실은 현재 페이지 스크롤양도 `.scrollTop`으로 구할 수 있다. html 태그 찾아서 `.scrollTop` 붙이면 된다.

<br>
<br>
<br>

# div 박스 높이 구하는 법

스크롤바가 생긴 박스의 경우 실제 높이같은게 궁금할 수 있다.

박스에 스타일로 넣은 height : 100px 이거 말고 **스크롤가능한 실제높이** 말이다.

그럴 땐 셀렉터로 찾아서 `.scrollHeight` 붙이면 나온다.

```js
$('.lorem').on('scroll', function () {
  var 스크롤양 = document.querySelector('.lorem').scrollTop;
  var div실제높이 = document.querySelector('.lorem').scrollHeight;
  console.log(스크롤양, div실제높이); // 188.x , 288
});
```

참고로 박스가 화면에 보이는 부분 높이는 `.clientHeight` 하면 나온다.

`document.querySelector('.lorem').scrollHeight;` 해보자.

<br>

이제 아까 짜려던 코드를 보자.

<br>

**div 스크롤바 내린 양 == div 실제높이일 경우 alert 띄워주세요~**

▲ 뭔가 이상한데요

스크롤바를 끝까지 내려도

스크롤바 내린 양은 188.x

div 실제높이는 288이 나온다.

같다고 비교하면 뭔가 안될 것 같다..

<br>
<br>
<br>

<img src="https://codingapple.com/wp-content/uploads/2022/02/%EC%BA%A1%EC%B2%98-2.png" width="250">

▲ 왜냐면 스크롤바 내린 양은 진짜 스크롤바 내린 양일 뿐이라 그렇다.

거기에 박스가 보이는 높이는 포함을 안한다.

**div 스크롤바 내린 양 + div가 화면에 보이는 높이 == div 실제높이일 경우 alert 띄워주세요~**

라고 코드짜면 될 것같다.

<br>

하지만

스크롤 내린 양은 정수단위로 나오지 않고

OS 마다 부정확해서 여유를 두고 비교하는게 좋다.

그래서 끝까지 스크롤했냐~ 체크하는 것 보다

끝에서 10px 정도 남기고 스크롤했냐~ 라고 체크해보자.

<br>
<br>
<br>

# 오늘의 숙제 :

1. 스크롤바를 100px 내리면 로고 폰트사이즈를 작게 만들어오십시오.

반대로 100px 미만으로 내리면 로고 폰트사이즈를 크게 만들어옵시다.

2. 회원약관 박스를 거의 끝까지 스크롤하면 alert를 띄워줍시다.

<br>

### 1번 풀이

```js
window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    document.querySelector('.navbar-brand').classList.add('minilogo');
  }
  if (window.scrollY < 100) {
    document.querySelector('.navbar-brand').classList.remove('minilogo');
  }
});
```

### 2번 풀이

```js
document.querySelector('.lorem').addEventListener('scroll', function () {
  var 스크롤양 = document.querySelector('.lorem').scrollTop;
  var div스크롤가능한실제높이 = document.querySelector('.lorem').scrollHeight;
  var div화면에보이는높이 = document.querySelector('.lorem').clientHeight;

  if (스크롤양 + div화면에보이는높이 > div스크롤가능한실제높이 - 10) {
    alert('회원약관 다읽었다');
  }

  // console.log(스크롤양, div스크롤가능한실제높이);
  // 스크롤 끝까지 내려도 188.X ,288
  // why? scrollTop의 특징때문
  // 화면에 보이는 div 높이는 스크롤양에 포함안됌.
  // div의 스크롤바 내린양 + 눈에보이는div높이 === div의 실제 높이
  // OS마다 scrollTop의 양이 정확히 일치하는 경우는 잘 없어서 등호말고 부등호 이런거 쓰면 됩니다.
});
```
