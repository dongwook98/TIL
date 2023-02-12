# Select 2 : 자바스크립트로 html 생성하는 법

저번시간에 짠 코드는 확장성이 부족하다.

셔츠사이즈를 95, 100 이라고 하드코딩해놓고 보여주기만 하기 때문이다.

실제 쇼핑몰이라면 셔츠 사이즈가 매일매일 바뀔 것인데

이럴 경우 서버에서 보낸 데이터 갯수에 맞게 `<option>` 태그를 생성해줘야 좋을듯

그래서 html을 생성하는 법을 알아보자.

<br>
<br>
<br>

# html 생성하는 법 1

`<div>` 안에 `<p>` 태그를 생성하려면

```html
<div id="test"></div>

<script>
  var a = document.createElement('p');
  a.innerHTML = '안녕';
  document.querySelector('#test').appendChild(a);
</script>
```

이러면 생성된다. 개발자도구 까보면 div 안에 p태그가 생성되어있다.

\- document.createElement() 쓰면 html 자료를 하나 생성해준다.

\- 그걸 맘대로 조작한 다음 appendChild() 써서 아무데나 넣으면 html이 생성된다.

<br>
<br>
<br>

# html 생성하는 법 2

```html
<div id="test"></div>

<script>
  var a = '<p>안녕</p>';
  document.querySelector('#test').insertAdjacentHTML('beforeend', a);
</script>
```

이래도 생성된다.

\- 문자자료로 html을 만든 다음

\- insertAdjacentHTML() 안에 넣으면 된다.

\- 'beforeend' 이건 안쪽 맨 밑에 추가하라는 뜻이다. 싫으면 맘대로 변경가능

<br>

1번 방법은 코드가 너무 길고 복잡하기 때문에 특별한 이유 없으면 2번 방법을 쓴다.

실은 1번이 더 빠르게 동작하는데 0.0000x초 차이임

<br>
<br>

```html
<div id="test"></div>

<script>
  var a = '<p>안녕</p>';
  $('#test').append(a);
</script>
```

append는 안쪽 맨 밑에 추가하라는 뜻

<br>

**Q. 저는 안쪽에 추가하는게 아니라 아예 바꾸고 싶은데요**

A. div찾아서 innerHTML = '<p></p>' 쓰셈

jQuery에선 .html() 입니다.

<br>
<br>
<br>

# 바지옵션 누르면 다른 사이즈가 나와야하는데

```html
<form class="container my-5 form-group">
  <p>상품선택</p>
  <select class="form-select mt-2">
    <option>모자</option>
    <option>셔츠</option>
    <option>바지</option>
  </select>
  <select class="form-select mt-2 form-hide">
    <option>95</option>
    <option>100</option>
  </select>
</form>
```

첫 `<select>` 에 바지옵션을 추가해보자.

이거 누르면 28과 30 사이즈가 담긴 `<select>`가 떠야한다.

코드 어떻게 짜야할까?

<br>
<br>
<br>

당연히 html을 미리 만들어놨다가 보여줘도 되는데

실제 쇼핑몰의 경우 그렇게 만들어놓을 순 없다.

바지 사이즈가 매일 달라지면 어떻게 합니까 매일 아침 html 수정할 것임?

실제 서비스는 매번 서버에서 데이터를 받아와서 "데이터 갯수만큼 `<option>` 생성해주세요~" 라고 코드를 짜놓는다.

그래서 우리도 이를 대비하기 위해 html을 미리 만들어놓지말고 자바스크립트로 html을 생성해보자.

<br>
<br>

```html
<script>
  $('.form-select')
    .eq(0)
    .on('input', function () {
      var value = $('.form-select').eq(0).val();
      if (value == '셔츠') {
        $('.form-select').eq(1).removeClass('form-hide');
      } else if (value == '바지') {
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        var 템플릿 = `<option>28</option><option>30</option>`;
        $('.form-select').eq(1).append(템플릿);
      }
    });
</script>
```

그래서 유저가 바지를 선택하면

1. 일단 둘 째 `<select>` 보여주셈

2. 둘 째 `<select>` 안에 비워주셈

3. html 만들어서 둘 째 `<select>` 안에 append 해주셈

이라고 코드를 짰더니 진짜로 그렇게 해준다.

아니면 더 간단하게 할 수도 있을듯
