# 모달창만들기와 간단한 애니메이션

<br>
<br>
<br>

# 지난번 숙제(모달창 띄우기) 풀이

### 1. 클래스부터 만들어놓읍시다

<br>

```css
.black-bg {
  (생략)display: none;
}

.show-modal {
  display: block;
}
```

그래서 css 파일열어서

모달창에 붙어있던 기본 class엔 display : none을 추가했고

show-modal 이라는 class를 만들었습니다.

이제 show-modal 원할 때 부착하면 모달창 보일듯요

<br>
<br>
<br>

### 2. 버튼클릭시 모달창 띄워주세요

<br>

버튼클릭시 모달창 띄워달라고 컴퓨터에게 명령주면 되는데

"띄워주세요~" 라고 코드짜면 컴퓨터가 못알아들음

지능이 없는 친구이기 때문에

show-modal 이라는 class를 부착이나 해달라고 구체적으로 명령주면 됨

```html
<button id="login">로그인</button>
<script>
  $('#login').on('click', function () {
    $('.black-bg').addClass('show-modal');
  });
</script>
```

그래서 버튼누르면 .black-bg에 show-modal 클래스명 추가하라고 코드짬

쌩자바스크립트는 document.querySelector('.black-bg').classList.add('show-modal') 하면 됨

<br>
<br>
<br>

# UI 애니메이션 만드는 법

fade 애니메이션은 이렇게 만들어요~

slide 애니메이션은 이렇게 만들어요~

이렇게 배우면 100강도 모자라서 평생 강의 듣다가 인생 끝나니까

UI 애니메이션 만드는 법을 알자!!

실은 자바스크립트말고 css 잘하면 됨

<br>
<br>
<br>

## [ one-way 일방향 애니메이션 만드는 법 ]

<br>

1. 시작스타일 만들고 (class로)

2. 최종스타일 만들고 (class로)

3. 원할 때 최종스타일로 변하라고 JS 코드짬

4. 시작스타일에 transition 추가

<br>

A 상태에서 B 상태로만 움직이는 one-way 애니메이션은 다 이렇게 만들면 됨

<br>
<br>
<br>

<img src="https://codingapple.com/wp-content/uploads/2022/02/Animation33.gif" width="300" height="200">

그럼 모달창 fade-in 애니메이션을 만들어보자

<br>

# 1. 시작스타일 2. 최종스타일을 class로 만들어봅시다.

애니메이션 동작 전 스타일과 동작 후 스타일을 class로 각각 만들어두라는 소리

```css
.black-bg {
  (생략)visibility: hidden;
  opacity: 0;
}
.show-modal {
  visibility: visible;
  opacity: 1;
}
```

기존에 있던 display 어쩌구는 다 버리고 이렇게 코드짰음

\- display : none을 주면 애니메이션이 잘 동작하지 않기 때문에

그거랑 비슷한 역할을 할 수 있는 visibility : hidden 을 사용

\- opacity는 투명도 조절할 수 있는 속성

0이면 투명 1이면 불투명 0.5면 반투명임

<br>

# 3. 원할 때 최종스타일로 변하라고 자바스크립트 코드짬

이건 아까 함

로그인버튼 누르면 알아서 show-modal 부착되고 그럼 최종스타일로 변함

<br>

# 4. 시작스타일에 transition 추가

```css
.black-bg {
  ...(생략)
  visibility: hidden;
  opacity: 0;
  transition: all 1s;
}
.show-modal {
  visibility: visible;
  opacity: 1;
}
```

transition은 스타일이 변할 때 천천히 변경하라는 뜻

지금 class 탈부착시 opacity가 변하는데 그걸 천천히 1초에 걸쳐 변경해줌

애니메이션 구현 끝!!
