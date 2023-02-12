# 캐러셀 만들기

<img src="https://codingapple.com/wp-content/uploads/2022/02/CSS-Only-Content-Slider.gif" width="300">

슬라이드 되는 UI들을 캐러셀이라고 한다.

어딜가든 많이 보이는 UI 라서 한번 만들어보자.

버튼이 많아보이는데 한 번에 만들려고 하면 매우 어렵다.

가장 간단한 1개 기능만 먼저 개발하자.

우린 쉽게 **2번 사진 보여주는 버튼의 기능**만 먼저 만들어보자.

<br>
<br>
<br>

# one-way 애니메이션들어간 UI 만드는 법은

1. 애니메이션 시작 전 화면 만들기

2. 애니메이션 종료 후 화면 만들기

3. 언제 종료화면으로 변할지 JS 코드짜기

4. transition 추가하기

이렇게 하면 된다.

<br>
<br>
<br>

# 1. 애니메이션 시작 전 화면 만들기

html css로 알아서 만들자.

<br>

<img src="https://codingapple.com/wp-content/uploads/2022/02/Animation45.gif" width="200">

<br>

▲ 사진이 이렇게 슬라이드되어서 보이려면

사진을 미리 어떻게 배치해놔야할까?

<br>
<br>

<img src="https://codingapple.com/wp-content/uploads/2022/02/%EC%BA%A1%EC%B2%982-1.png" width="300">

▲ 사진 3개를 가로로 길게 배치해놔야 한다.

그리고 나중에 이거 전체를 왼쪽으로 이동시키면 된다.

그럼 html css로 저렇게 코드를 짜보자.

<br>
<br>
<br>

```html
<div style="overflow: hidden">
  <div class="slide-container">
    <div class="slide-box">
      <img src="car1.png" />
    </div>
    <div class="slide-box">
      <img src="car2.png" />
    </div>
    <div class="slide-box">
      <img src="car3.png" />
    </div>
  </div>
</div>
```

```css
.slide-container {
  width: 300vw;
  transition: all 1s;
}
.slide-box {
  width: 100vw;
  float: left;
}
.slide-box img {
  width: 100%;
}
```

이렇게 코드를 짜면 이미지 3개가 가로로 배치된다.

\- vw단위는 브라우저 폭에 비례한 단위이다. 100vw는 브라우저 폭의 100%이다.

\- 애니메이션 UI 만들기 step 4인 transition은 미리 추가했다.

<br>
<br>
<br>

# 2. 애니메이션 종료 후 화면 만들기

그니까 2번버튼 누르면 2번사진이 슬라이드 되어서 보일텐데

그 최종화면을 만들어보라는 소리이다.

어떤 html 요소를 왼쪽으로 이동시키는건 margin-left 아니면 transform 속성을 사용하면 된다.

```css
.slide-container {
  width: 300vw;
  transition: all 1s;
  transform: translateX(-100vw);
}
```

아까 만든 css 파일 중 가로로 긴 박스에

`transform: translateX(-100vw);` 이걸 추가하니까 2번사진이 슬라이드 된다.

이걸 종료화면으로 하자.

class로 만들어두고 부착하는 식으로 해도되고 자바스크립트로 직접 부여해도 된다.

<br>
<br>
<br>

# 3. 언제 종료화면으로 변할지 JS 코드짜기

```js
document.querySelector('.slide-2').addEventListener('click', function () {
  document.querySelector('.slide-container').style.transform =
    'translate(-100vw)';
});
```

밑에 자바스크립트로

버튼2 누르면 최종화면으로 변하라고 코드짰다.

4. transition은 아까 했으니 캐러셀 완성이다.

<br>
<br>
<br>

# 오늘의 교훈

남의 코드 따라적는 식으로 배우면 평생 캐러셀밖에 못만들고 죽는다.

안배우고 알아서도 코드 잘 짜고 싶으면

ui 만드는 4-step / 배운 자바스크립트 문법을 어디다 쓰는지 /

복잡하면 한글로 미리짜보기 / 복잡하면 가장쉬운것부터 해보기 등등 /

맨날 강조하는 것들을 잘 외우자.

<br>
<br>
<br>

# 오늘의 숙제 :

버튼1, 버튼3 기능도 알아서 만들어옵시다.

넘 쉬워서 예습을 원하면 다음사진보기 & 이전사진보기 버튼과 기능도 만들어보십시오.

```html
<script>
  // 1번 버튼 눌렀을때
  document.querySelector('.slide-1').addEventListener('click', function () {
    document.querySelector('.slide-container').style.transform =
      'translate(0vw)';
  });

  // 2번 버튼 눌렀을때
  document.querySelector('.slide-2').addEventListener('click', function () {
    document.querySelector('.slide-container').style.transform =
      'translate(-100vw)';
  });

  // 3번 버튼 눌렀을때
  document.querySelector('.slide-3').addEventListener('click', function () {
    document.querySelector('.slide-container').style.transform =
      'translate(-200vw)';
  });

  // 다음버튼 누르면
  // 지금 보이는 사진이 1이면 2번사진보여주세요~
  // 지금 보이는 사진이 2이면 3번사진보여주세요~

  // 지금 보이는 사진 ->
  // 컴퓨터는 지능이 0이기때문에 지금보이는사진이라고 하면 못알아먹음
  // 컴퓨터가 기억 할 수 있도록 변수문법 사용

  // if 지금사진이 1이면 -100vw 이동
  // if 지금사진이 2면 -200vw 이동
  // if 지금사진이 3이면 -300vw 이동
  let 지금사진 = 1;
  document.querySelector('.next').addEventListener('click', function () {
    document.querySelector(
      '.slide-container'
    ).style.transform = `translateX(-${지금사진}00vw)`;
    지금사진++;
  });

  // 이전버튼 눌렀을때
  // 지금보이는 사진이 3이면 2번사진보여주세요~
  // 지금보이는 사진이 2이면 1번사진보여주세요~
  // if(지금보이는 사진이 3이면) {
  //   2번사진보여주세요~
  // }
  document.querySelector('.previous').addEventListener('click', function () {
    if (지금사진 === 3) {
      document.querySelector('.slide-container').style.transform =
        'translate(-100vw)';
      지금사진 -= 1;
    } else if (지금사진 === 2) {
      document.querySelector('.slide-container').style.transform =
        'translate(0vw)';
    }
  });
</script>
```
