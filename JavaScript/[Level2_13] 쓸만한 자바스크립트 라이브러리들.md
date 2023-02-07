# (참고) 쓸만한 자바스크립트 라이브러리들

직접 자바스크립트 코드를 처음부터 짜기 귀찮으면

남들이 만들어놓은 라이브러리를 사용해도 된다.

UI 개발도 마찬가지로 복사 붙여넣기식으로 멋진 UI 개발이 가능하다.

그렇다고 복붙식으로 포트폴리오를 만들면 개발실력이 아니라 복붙실력이 어필된다.🤣

<br>
<br>
<br>

# 1. Swiper

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EC%BA%A1%EC%B2%981-2.png" width="400">

<br>

캐러셀 (이미지슬라이드되는거) 만들고 싶으면 직접 코드 짜도 되겠지만

좀 이쁘게 아니면 쉽게 여러기능을 만들고 싶으면 Swiper 라이브러리 써도 된다.

호환 잘되고 이미지 lazy loading 이런 것도 되고 터치/드래그도 된다.

 <br>

https://swiperjs.com/get-started#use-swiper-from-cdn

여기가서 튜토리얼 그대로 js 파일, css 파일을 다운받아서 첨부한 뒤에

html css js 예제코드 복사붙여넣기하면 캐러셀이 나온다.

사용법도 홈페이지 참고하면 된다.

<br>
<br>
<br>

# 2. Chart.js

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EC%BA%A1%EC%B2%982-2.png" width="400">

<br>

웹페이지에 차트만들고 싶으면 쓴다.

실제 서비스면 관리자, admin 페이지 만들 때도 많을텐데 거기서 통계를 이쁘게 보여줄 때 유용하다.

div 박스에 css 스타일 넣어서 그래프만들고 그림그리고 해도 되겠지만 그럴 바엔 저거 쓰는게 좋다.

코인거래소 같은 곳에는 더 프로페셔널한 유료 차트라이브러리 같은걸 쓰기도 한다.

<br>

https://cdnjs.com/libraries/Chart.js

이런데 가서 js 파일 다운받거나 cdn 버전으로 구해서 html 파일에 넣으면 설치끝

<br>

https://www.chartjs.org/docs/latest/

그리고 Chart.js 홈페이지 예제 코드 아무데나 붙여넣기 하면 차트나온다.

<br>
<br>
<br>

# 3. Animate On Scroll

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EC%BA%A1%EC%B2%983-1.png" width="300">

스크롤 내리면 요소가 서서히 등장하는 애니메이션을 만들고 싶을 때 쓰면 좋다.

유저가 스크롤바를 ... div 박스 현재 y좌표만큼 내리면 애니메이션 보여달라고 코드짜면 되긴 하는데 귀찮을때 사용하면 좋을듯..

<br>

https://github.com/michalsnik/aos

여기서 css파일, js 파일 cdn버전 찾아서 html 파일에 넣고

그 다음에 밑에 `<script>` 태그 열어서

```html
<script>
  AOS.init();
</script>
```

이러면 설치 끝

<br>

https://michalsnik.github.io/aos/

그 다음에 위 사이트에서 예제 코드 따라서 복붙하면 구현 끝

`<div data-aos="fade-up"></div>`

원하는 박스에 이런거 추가하면 된다.

시간, 방향 설정가능하고 원하는 클래스명 부착도 된다.

<br>
<br>
<br>

# 4. EmailJS

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EC%BA%A1%EC%B2%984-1.png" width="400">

원래 이메일 전송은 서버가 해야하지만 Gmail 이런거 서버를 잠깐 빌리면

자바스크립트만으로 이메일 전송이 가능하다.

유저가 내 이메일 계정으로 이메일 전송도 가능하고

내 이메일 계정으로 남에게 이메일 전송도 가능하다.

https://www.emailjs.com/docs/introduction/how-does-emailjs-work/

이 사이트 가서 가입하고 계정만들고

튜토리얼 그대로 복붙하고 거기에 내가 방금 만든 EmailJS 계정아이디만 잘 채우면 된다.

<br>
<br>
<br>

# 5. Lodash

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EC%BA%A1%EC%B2%985.png" width="400">

array, object, 문자, 숫자 자료를 다루기 편해지는 기본함수들을 제공해준다.

예를 들어서 array 자료에 있는 마음에 안드는 'a' 라는 문자를 제거하고 싶으면

직접 반복문 돌리거나 filter 함수 쓰거나 그러면 되는건데

Lodash 설치해놨으면 그냥 `_.pull(어레이자료, 'a');` 쓰면 된다.

<br>

https://lodash.com/

설치파일은 4kb 밖에 안된다.

하지만 초보라면 저런거 의존하는것보다 직접 어렵게 반복문 써서 알고리즘 짜는 것도 좋은 연습이 된다.

<br>
<br>
<br>

# 6. React 아니면 Vue

페이지가 너무 많아서 UI 재활용이 자주 필요한 사이트나

모바일 앱처럼 페이지 이동없이 동작하는 Single Page Application을 만들 때 유용한 자바스크립트 라이브러리이다.

요즘은 원래 용도와 관계없이 마구잡이로 쓴다. 💩

<br>
<br>
<br>

# 7. Fullpage.js

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EC%BA%A1%EC%B2%986.png" width="400">

웹페이지를 PPT처럼 만들어준다.

버튼누르면 다음 슬라이드보여주는데 하지만 이런 UI는 유행이 지났다.

<br>

https://alvarotrigo.com/fullPage/

이건 동작예시

<br>

https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs

여기서 css, js 파일을 cdn 식으로 설치하거나 그러면 되고

예시 html과 js 코드를 복사붙여넣기하면 완성
