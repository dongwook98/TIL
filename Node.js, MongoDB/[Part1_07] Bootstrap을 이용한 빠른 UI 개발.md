# Bootstrap을 이용한 빠른 UI 개발

# Bootstrap을 설치해서 빠르게 HTML UI를 개발하자

구글에 Bootstrap 검색하신 후 맨 처음에 뜨는 사이트에 방문하도록 합니다.

그리고 Get started 메뉴 혹은 버튼을 누른 뒤

starter template라는 부분의 예제 코드를

빈 html에 붙여넣으면 설치완료

(못찾겠다면 https://getbootstrap.com/docs/4.4/getting-started/introduction/#starter-template 방문하십시오)

<br>
<br>
<br>

# Bootstrap이란?

트위터 사내 개발자들이 만든 웹 컴포넌트 라이브러리입니다.

원래 HTML CSS 뭐빠지게 디자인해서 버튼만들고 메뉴만들고 하는데

그럴 시간을 줄여주는 라이브러리라고 보시면 됩니다.

1. Bootstrap CSS와 JS 파일을 다운받아서 내 HTML 파일에 첨부해서 설치를 끝내신 뒤에

2. 원하는 UI를 Bootstrap 홈피에서 찾아서 예제코드를 내 HTML에 복붙하면 개발 끝입니다.

<br>

\- 강의영상에선 CSS 파일 등을 직접 다운받아서 설치하지 않고 CDN 방식으로 첨부하였습니다.

\- 당연히 npm 어쩌구로 Bootstrap 설치도 가능합니다. 이건 찾아보십시오.

<br>
<br>
<br>

# 오늘의 숙제 :

오늘의 숙제 : write.html 페이지를 제작해보십시오

form 안에 글자 input 두개, 그리고 전송버튼 하나가 있는 HTML 페이지를 하나 만들어오시면 되겠습니다.

직접 짜는 것 보다는 Bootstrap 사이트에서 예제코드 복붙해오시면 1초만에 끝입니다.

심심하면 /write로 방문시 write.html을 보여주는 서버 코드도 짜보십시오.

<br>

### ✍️ 풀이

<img src="https://user-images.githubusercontent.com/119502777/217569492-d18a79f2-4187-4936-9852-c90725855a45.gif" width="300">

/write로 방문시 write.html을 보여주는 서버 코드

```js
(server.js 파일)

app.get('/write', function (req, res) {
  res.sendFile(__dirname + '/write.html');
});
```

```html
(write.html 파일)

<!DOCTYPE html>
<html>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />

    <title>Hello, world!</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Todo App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Write</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">임시</a>
          </li>
        </ul>
      </div>
    </nav>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">오늘의 할일</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">세부 내용</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">저장하기</button>
    </form>
    <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```
