# 서버에서 HTML 파일전송해보기 & Nodemon으로 자동화

# 서버 껏다 키기 귀찮으니 nodemon 설치를 해보자

터미널 킨 다음 npm install -g nodemon 입력

<br>

설치가 잘 되었다면 이제 서버를 실행할 때

nodemon server.js 라고 입력해주면 된다.

그럼 파일 저장할 때 마다 이제 지가 알아서 서버를 새로 시작해준다.

(하지만 브라우저에서 새로고침은 해야한다.)

<br>
<br>
<br>

# GET 요청시 HTML 파일을 보내주도록 하자.

누군가 /pet 방문시 안내메세지만 달랑 띄우는건 너무 없어보이니

HTML 파일을 보내주도록 하자.

<br>
<br>
<br>

일단 HTML 파일을 작성해보도록 합시다.

```html
(server.js랑 같은 폴더에 index.html 생성 후 작성)

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h4>안녕하세요 홈페이지입니다.</h4>
  </body>
</html>
```

이렇게 코드를 작성하고 저장한 뒤에

server.js로 돌아가서

```js
server.js;

app.get('/', function (요청, 응답) {
  응답.sendFile(__dirname + '/index.html');
});
```

이렇게 쓰면 된다.

그럼 누군가 / 경로로 접속시 (/ 하나만 있으면 홈페이지이다.)

server.js랑 같은 경로에 있는 /index.html 이라는 파일을 보내준다.

\- sendFile() 함수를 쓰면 파일을 보낼 수 있다.

\- \_\_dirname은 현재 파일의 경로를 뜻합니다.

<br>

이것도 역시 이해고 자시고 그냥 외워서 사용하자.
