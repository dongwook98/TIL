# 기본적인 UI 만드는 법칙

자바스크립트를 사용하면 웹페이지에서는 탭, 모달창, 서브메뉴, 툴팁 등 수백개의 **동적인** UI를 만들 수 있습니다.

> UI 만드는 법칙

1. HTML CSS 로 미리 UI 디자인을 해놓기 (필요하면 보여주고 평소엔 숨김)

2. 버튼을 누르거나할 경우 UI를 보여달라고 자바스크립트 코드짬

이게 다임

<br>
<br>
<br>

# 오늘의 숙제 :

Alert 박스 내에 닫기 버튼과 기능을 만들어보십시오

닫기 버튼을 누르면 Alert 박스가 뿅 사라져야합니다.

```js
  <div class="alert-box" id="alert">알림창임</div>
    <button onclick="document.getElementById('alert').style.display = 'block'">
      열기
    </button>
    <button onclick="document.getElementById('alert').style.display = 'none'">
      닫기
    </button>
```

풀이

1. 닫기 버튼 만들기

2. 닫기 기능 구현

   - 닫기 버튼 클릭시 Alert 박스 안보이게 하면됨
