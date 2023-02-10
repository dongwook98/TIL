# DOM이라는 용어 개념정리 & load 이벤트

<br>

# 1. DOM 이라는 말이 자주 등장합니다.

책보고 검색하고 그러면 맨날 DOM이라는 용어를 남용하는데 그게 뭔지 알아봅시다.

Document Object Model 이라는 뜻인데 그냥 설명하면 이해가 안되니 배경설명부터 갑니다.

<br>
<br>
<br>
자바스크립트는 HTML 조작에 특화된 언어라고 설명드렸습니다.

그런데 자바스크립트가 어떻게 HTML을 조작할 수 있는지 원리를 생각해본 적이 있습니까.

생각해보면 HTML과 자바스크립트는 다른 언어입니다.

그래서 자바스크립트에선 `<p></p>` 이런 html을 직접 해석하고 조작할 수 없습니다.

<br>
<br>

```html
<script>

  <p></p>.innerHTML = '안녕' (당연히 에러날듯)
</script>
```

자바스크립트는 `<p>` 이런건 못알아듣습니다.

그런데 어떻게 HTML 태그들을 알아보고 조작할 수 있는 것일까요?

<br>
<br>

자바스크립트가 **HTML 조작을 하기 위해선 HTML을 자바스크립트가 해석할 수 있는 문법으로 변환해놓면** 됩니다.

HTML을 자바스크립트가 좋아하는 array 혹은 object 자료형에 담아버리는게 좋지 않을까요?

그래서 실제로 브라우저는 HTML 페이지를 열어줄 때

HTML을 자바스크립트로 쉽게 찾고 바꾸기 위해 object와 비슷한 자료형에 담아줍니다.

<br>
<br>

예를 들어서

```html
<div style="color : red">안녕하세요</div>
```

브라우저는 이런 HTML을 발견하면 object 자료로 바꿔서 보관해둡니다.

구체적으로는 var document = { } 이런 변수를 하나 만들어서 거기 넣어줍니다.

<br>
<br>
<br>

```js
var document = {
  div1 : {
    style : {color : 'red'}
    innerHTML : '안녕하세요'
  }
}
```

▲ 대충 이렇게 object 자료에 정리를 해놓는다는 소리입니다.

왜냐고요? 이래야 저렇게 점찍어서 원하는 자료를 출력하고 조작하고 할 수 있지 않겠습니까.

이제 document.div1.innerHTML = '안녕' 이렇게 자바스크립트를 짜면 HTML 조작이 가능할듯요

그래서 저렇게 object에 담아두는 것입니다.

(물론 실제 DOM과 생김새는 좀 다르겠지만)

<br>

위 변수를 **document object**라고 부릅니다. 간지나게 + model이라고 붙여서 Document Object Model이라고 합니다.

요약하자면 자바스크립트가 HTML에 대한 정보들 (id, class, name, style, innerHTML 등)을

object 자료로 정리한걸 DOM이라고 부릅니다.
