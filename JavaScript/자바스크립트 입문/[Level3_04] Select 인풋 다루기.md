# select 들어간 폼을 만들어보자.

```js
<form class='container my-5 form-group'>
  <p>상품선택</p>
  <select class='form-select mt-2'>
    <option>모자</option>
    <option>셔츠</option>
  </select>
</form>
```

`<select>`는 `<input>` 이랑 똑같은데

사용자가 고를 수 있는 선택지를 드랍다운 메뉴로 제공하는 `<input>`이다.

선택지는 `<option>`으로 넣으면 된다.

<br>

\- `<select>` 태그도 선택시 input,chage 이벤트가 발생한다.

\- `<select>` 태그도 .value로 유저가 입력한 값을 가져올 수 있다.

<br>
<br>
<br>

# 셔츠고르면 밑에 `<select>` 더 보여주기

<img src="https://codingapple.com/wp-content/uploads/2022/03/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C1.png">

▲ 유저가 셔츠를 선택하면 하단에 95, 100 을 선택할 수 있는 `<select>`를 하나 더 만들어보자

<br>
<br>
<br>

# 어떻게 만들었냐면

1. html css로 미리 디자인
2. 원할때 보여달라고 js코드짬

```html
<form class="container my-5 form-group">
  <p>상품선택</p>
  <select class="form-select mt-2">
    <option>모자</option>
    <option>셔츠</option>
  </select>
  <select class="form-select mt-2 form-hide">
    <option>95</option>
    <option>100</option>
  </select>
</form>
```

미리 `<select>` 하나 더 추가했고 form-hide 클래스에는 display : none 주었다.

이제 "유저가 셔츠선택하면 form-hide 제거해주세요~" 라고 코드짜면 완성일듯

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
      }
    });
</script>
```

`<script>` 안에 대충 적은 코드는 페이지 로드시 1회 실행되기 때문에

`<select>` 조작할때마다 실행하려면

`<input>` 이나 `<select>` 조작할 때 input 이벤트가 발생하기 때문에

input 이벤트리스너를 부착함
