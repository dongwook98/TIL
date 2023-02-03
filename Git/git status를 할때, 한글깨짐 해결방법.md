git status를 할 때, 한글이름을 가지는 파일일 경우에 /200/300/385 이런식으로 파일명이 깨지는 경우가 있다. (mac 터미널)

```bash
git config --global core.quotepath false
```

위 설정으로 바꾸면 올바르게 한글이름 파일을 git status로 상태확인이 가능해진다.
