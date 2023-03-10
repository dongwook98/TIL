# array, for 반복문 실력향상 과제

**Q. Array에서 철수라는 자료를 찾고 싶습니다**

<br>

array에서 이름을 찾아주는 함수를 만들고 있습니다.

함수 안에 파라미터로 이름을 집어넣으면

그 이름이 출석부에 있으면 콘솔창에 출력해주는 함수를 만들어봅시다.

어떻게 만들면 될까요?

## ✍️ 풀이

```js
var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기() {
  //여기다 코드 짜십쇼
  for (let i = 0; i < 출석부.length; i++) {
    if (이름 === 출석부[i]) {
      console.log('있어요');
      return; // (응용) '철수'가 두번있는 경우 함수종료하기위해 return 사용
    }
  }
}
```

동작 예시 :

이름찾기('철수'); 라고 쓰면 콘솔창에 '있어요'라는 글자가 떠야합니다.

이름찾기('명수'); 라고 쓰면 콘솔창에 아무 글자도 뜨지 않아야합니다.

**(조건) 이상한데서 찾아온 find, indexOf 같은 자바스크립트 기본함수들 사용금지**

<br>
<br>
<br>

**Q. 갑자기 구구단을 콘솔창에 출력하고 싶습니다.**

철수는 구구단을 외우지 못하는 관계로

자바스크립트를 이용해 구구단을 2단부터 9단까지 콘솔창에 출력하고 싶어졌습니다.

빨리 출력해보십시오.

콘솔창 출력결과 :

2

4

6

8

...

18

3

6

9

12

...

27

이렇게 2단부터 9단까지의 곱셈 결과부분만 쭉 출력해보면 됩니다.

## ✍️ 풀이

2*1
2*2
2*3
...
2*9

3*1
3*2
3*3
...
3*9

9*1
9*2
9*3
...
9*9

```js
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i * j);
  }
}
```

Q. 평균점수 계산기 만들기

어떤 함수에

기존 모의고사 성적들을 array 자료에 전부 담아 첫 파라미터로 입력하고

이번 11월 모의고사 성적을 둘 째 파라미터로 입력하면

11월 성적이 기존 성적들의 평균에 비해 얼마나 우수한지 결과를 알려주고 싶습니다.

어떻게 함수를 만들면 될까요?

동작예시 :

함수([10, 20, 30, 40, 50], 40) 이렇게 쓰면 콘솔창에 "평균보다 10점이 올랐네요"가 떠야합니다. (평균이 30이니까)

함수([40, 40, 40], 20) 이렇게 쓰면 콘솔창에 "평균보다 20점이 떨어졌네요 재수추천"이 떠야합니다. (평균이 40이니까)

## ✍️ 풀이

```js
function 어떤함수(기존모의고사성적들, 이번모의고사성적) {
  // 전체점수 = 기존모의고사성적들[0] + 기존모의고사성적들[1] + 기존모의고사성적들[2] + ...

  let 전체점수 = 0; // 변수 문법 사용이유? 전체점수를 컴퓨터에게 기억시키고싶어서
  for (let i = 0; i < 기존모의고사성적들.length; i++) {
    전체점수 = 전체점수 + 기존모의고사성적들[i];
    console.log(기존모의고사성적들[i]);
  }

  console.log(전체점수);
  // 전체점수 / 모의고사과목개수
  let 평균 = 전체점수 / 기존모의고사성적들.length;
  console.log(평균);

  if (평균 < 이번모의고사성적) {
    console.log(`평균보다 ${이번모의고사성적 - 평균}점이 올랐네요 ㅊㅋ`);
  } else {
    console.log(`평균보다 ${평균 - 이번모의고사성적}점이 떨어졌네요 재수추천`);
  }
}
```
