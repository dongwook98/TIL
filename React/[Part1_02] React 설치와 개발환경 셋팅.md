# 개발환경 셋팅

1. 구글에 Nodejs 검색해서 LTS라고 써있는 버전 설치

2. Visual Studio Code 에디터도 구글에 검색해서 설치

<br>
<br>
<br>

# 리액트 프로젝트 생성은

**1. 작업용 폴더를 하나 만들어준다.**

<img src="https://user-images.githubusercontent.com/119502777/216836764-ecdac0e6-32a7-46fd-a7ae-79469a73e5b1.png">

<br>

**2. 폴더에 우클릭해서 터미널열기 누르기**

<img src="https://user-images.githubusercontent.com/119502777/216836979-4ab923c4-53c7-4e71-9639-c67322f1ee8a.png" height="400">

<br>

**3. 그러면 터미널이라는게 나오는데**

```bash
npx create-react-app blog
```

이거 그대로 입력하고 엔터누르면 프로젝트 생성 끝

<img src="https://user-images.githubusercontent.com/119502777/216837049-e6a74fdc-ee17-4bcc-832d-0f2a57055c85.png">

<br>

**4. 에디터에서 프로젝트 오픈하려면**

프로젝트 설치했으면 프로젝트이름의 폴더(blog)가 하나 생성되는데

그 폴더를 에디터로 오픈해서 코드짜면 된다.

<br>

**5. App.js가 메인페이지이다.**

src 폴더 안에 있는 App.js 이게 메인페이지니까 거기다가 코드짜면 된다.

<br>

**6. 내 사이트를 브라우저로 미리보기 띄우고 싶다면**

에디터 상단메뉴중에 Terminal- New Terminal 누른다.

그럼 터미널이 뜨는데 거기다가 **npm start** 입력후 엔터치면 미리보기가 뜬다.

<img src="https://user-images.githubusercontent.com/119502777/216837193-05f413af-924c-4175-adf5-f700f068d6a9.png" height="20">

\- 위 사진 처럼 blog 같은 프로젝트명이 터미널에 안뜨면 폴더오픈을 제대로 안한것이다.

\- 브라우저 자동으로 안뜨면 localhost:3000 이라고 크롬 브라우저 열고 직접 입력해야한다.

<br>
<br>
<br>

# 자주 겪는 에러

Q1. 저는 리액트 프로젝트 설치가 10분 이상 오래걸려요

<br>

스타벅스에서 하지 말고 집에서 합시다.

<br>
<br>
<br>

Q2. "npx command not found 어쩌구" 에러

<br>

\- 터미널 다시 껐다 켜보세요

\- 대부분 nodejs 제대로 설치 안해서 그렇습니다. 옛날 버전이라 그럴 수 있습니다.

\- 맥북이면 brew 그런거 쓰지 말고 다운받읍시다.

\- 윈도우는 C 드라이브에 얌전히 설치합시다.

\- 리눅스는 알아서 nodejs 설치나 버전 업데이트 명령어 잘 입력하면 될듯요

<br>
<br>
<br>

Q3. 맥북인데 "permission이 없어요" 에러

<br>

프로젝트 생성시 저런 에러가 뜨면 터미널에

```bash
sudo npx create-react-app blog
```

입력해보면 됩니다.

비번입력하라고 하면 맥북 비번 입력하면 됩니다.

<br>
<br>
<br>

Q4. 윈도우인데 "허가되지 않은 스크립트 입니다 어쩌구~" 에러

<br>

윈도우 하단 검색메뉴에서 Powershell 검색 - 우클릭 - 관리자 권한으로 실행한 뒤

    Set-ExecutionPolicy Unrestricted

라고 대소문자 하나라도 틀리지않고 입력하고 엔터칩니다.

그 다음에 뭐 선택하라고 하면 y 누르고 엔터치면 될듯요

그럼 이제 npx, npm으로 뭐 하는거 잘됩니다.

<br>
<br>
<br>

Q5. The engine "node" is incompatible with this module 에러

<br>

npx로 설치시 이런 에러가 있을 수 있습니다. nodejs 버전이 낮거나 너무 높다는 뜻이며

nodejs를 요구하는 버전으로 재설치하시면 됩니다.

<br>
<br>
<br>

Q6. npm 어쩌구 입력시 안되면

<br>

https://imspear.tistory.com/31 이런거 참고해서 환경변수 등록해봅시다.

<br>
<br>
<br>

Q7. 윈도우인데 아직도 터미널에서 뭐 하는거 안되면

<br>

\- 이상한 보안프로그램 끄십시요 특히 Ahnlab security 어쩌구

\- 작업폴더를 오픈한 다음 파일 - Powershell 열기 - 관리자권한으로 열기 누른 다음

거기서 npx 어쩌구 해서 프로젝트 생성해봅시다.
