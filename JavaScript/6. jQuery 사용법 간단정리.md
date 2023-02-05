# jQuery 사용법 간단정리

자바스크립트 특징인데 코드가 매우 길고 더러움

그게 불편하면 html 조작을 쉽게 바꿔주는 라이브러리들을 사용 가능

React, Vue, jQuery 이런 것들이 전부 html 조작 쉽게 바꿔주는 라이브러리들

React와 Vue는 자바스크립트 어느정도 문법을 알아야 사용가능하기 때문에 나중에 도전해보고

우선 jQuery를 사용해보자

<br>

### Q. 어 저는 jQuery 말고 자바스크립트언어를 배우고 싶은데..

<br>

A. jQuery는 자바스크립트 querySelectorAll, addEventListener, classList.add 이런 것들을

**이름만 훨씬 짧게 바꿔주는 라이브러리일 뿐 다른 언어가 아님**

굳이 싫다면 쌩자바스크립트로 알아서 길게 쓰도록 하자

<br>
<br>
<br>

# jQuery 설치는

https://releases.jquery.com/

위 링크에서 jQuery 3.x 버전 `<script>` 태그를 찾아서 html 파일에 복붙

`<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`

이제 jQuery 설치한 곳 **하단에서** jQuery 문법을 사용가능!

jQuery 설치한 곳 상단에 코드짜면서 뭔가 안된다 하면 바보 멍청이임

<br>
<br>
<br>

# jQuery 써서 html 변경하려면

```html
<p class="hello">안녕</p>

<script>
  $('.hello').html('바보');
</script>
```

이렇게 코드 양이 절반으로 줄어들어서 쓰는 것일 뿐임

\$ 이건 querySelector와 동일하게 사용하면 됨

<br>
<br>
<br>

# jQuery 써서 스타일 변경하려면

```html
<p class="hello">안녕</p>

<script>
  $('.hello').css('color', 'red');
</script>
```

이러면 css 스타일 변경이 가능

<br>

🚨 js 셀렉터로 찾으면 js 함수들을 뒤에 붙여야하고

jQuery 셀렉터로 찾으면 jQuery 함수들을 뒤에 붙여야 잘 됨

\$('어쩌구').innerHTML 이건 안된다는 소리

<br>
<br>
<br>

# jQuery 써서 class 탈부착하려면

```html
<p class="hello">안녕</p>

<script>
  $('.hello').addClass('클래스명');
  $('.hello').removeClass('클래스명');
  $('.hello').toggleClass('클래스명');
</script>
```

이러면 됨

toggleClass는 왔다갔다 토글해줌

<br>
<br>
<br>

# html 여러개를 바꾸려면

```html
<p class="hello">안녕</p>
<p class="hello">안녕</p>
<p class="hello">안녕</p>

<script>
  document.querySelectorAll('.hello')[0].innerHTML = '바보';
  document.querySelectorAll('.hello')[1].innerHTML = '바보';
  document.querySelectorAll('.hello')[2].innerHTML = '바보';
</script>
```

`<p>` 태그 3개 내용을 일괄적으로 '바보'로 바꾸려면

그냥 자바스크립트는 저렇게 3줄 이나 써야 됨;;

<br>

```html
<p class="hello">안녕</p>
<p class="hello">안녕</p>
<p class="hello">안녕</p>

<script>
  $('.hello').html('바보');
</script>
```

그런데 $() 셀렉터는 그냥 querySelectorAll처럼 여러개가 있으면 전부 찾아줌

그리고 거기에 [0] 이런 식으로 순서지정해줄 필요없이 냅다 `.html()` 붙이면

**셀렉터로 찾은 모든 요소를 한 번에 조작하고 변경해줄 수 있음**

<br>
<br>
<br>

# 이벤트리스너는

```html
<p class="hello">안녕</p>
<button class="test-btn">버튼</button>

<script>
  $('.test-btn').on('click', function(){
    어쩌구~
  });
</script>
```

addEventListener 대신 on 쓰면 똑같음

on은 $() 이걸로 찾은 것들에만 붙일 수 있음

<br>
<br>
<br>

# UI 애니메이션은

```html
<p class="hello">안녕</p>
<button class="test-btn">버튼</button>

<script>
  $('.test-btn').on('click', function () {
    $('.hello').fadeOut();
  });
</script>
```

.hide() 는 사라지게

.fadeOut() 은 서서히 사라지게

.slideUp() 은 줄어들며 사라지게 만들어 줌

간단한 애니메이션은 이런 식으로 쉽게 사용 가능

<br>

애니메이션을 반대로 주고 싶으면 show() fadeIn() slideDown() 이런게 있음

아니면 fadeToggle() 이런 것도 있음

검색 ㄱㄱ

<br>

참고) jQuery로 간단한 애니메이션은 쉽게 사용가능하지만 좋은 웹페이지를 위해선 css로 짜는게 맞음

<br>
<br>
<br>

# 오늘의 숙제 :

버튼하나 아무데나 만들고 버튼 누르면 모달창을 띄워오십시오.

1. 미리 모달창 디자인 해놓고 숨기기

부트스트랩에서 모달창 UI 검색 후 복붙

```html
<div class="black-bg">
  <div class="white-bg">
    <h4>로그인하세요</h4>
    <button class="btn btn-danger" id="close">닫기</button>
  </div>
</div>

... 생략

<button id="loginButton">로그인</button>
```

visivility: hidden; 줘서 숨기기

show 클래스 부착시 visivility: visivle 로 덮어씌워짐

```css
.black-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  padding: 30px;
  visibility: hidden;
  opacity: 0;
  transition: all 1s;
}
.white-bg {
  background: white;
  border-radius: 5px;
  padding: 30px;
}

.show {
  visibility: visible;
  opacity: 1;
}
```

2. 로그인 버튼 클릭시 모달창 나오게 js코드 짜기

▶︎ show 클래스 추가하면 모달창 나오게 위에 설정해놓음

```js
document.querySelector('#loginButton').addEventListener('click', function () {
  document.querySelector('.black-bg').classList.add('show');
});

// jQuery로 html 조작
// $('#loginButton').on('click', function () {
//   $('.black-bg').addClass('show');
// });
```
