# this 키워드를 알아보자 2.event listener와 constructor

저번 시간 this 의미 정리를 하자면

1. 그냥 일반 함수에서 쓰면 window

2. 오브젝트 내의 함수(메소드)에서 쓰면 함수를 동작시키는 오브젝트

가 출력된다고 배웠다.

<br>
<br>
<br>

# 3. constructor 안에서 쓰면 constructor로 생성되는 오브젝트를 뜻한다.

자바스크립트에서 오브젝트를 비슷한걸 여러개 만들고 싶을 경우

오브젝트를 복사하는게 아니라 constructor 라는걸 만들어서 사용한다.

쉽게 말하면 constructor는 오브젝트 복사해서 생성해주는 기계이다.

기계를 어떻게 만드는지 알아보자.

```js
function 기계() {
  this.이름 = '동욱';
}
```

이게 기계 만드는 법이다.

함수 문법을 이용해서 만든 후에, 안에 this.어쩌구를 추가하면 된다.

여기서의 this는 <span style=color:red>**기계로부터 새로 생성될 오브젝트**</span>들을 의미한다.

<br>

그럼 this.이름 = '동욱' 이건 무슨 뜻일까요?

새로 생성되는 오브젝트의 이름 key값에 '동욱'이라는 value를 집어넣어주세요

라는 뜻이다.

<br>
<br>
<br>

▼ 이건 참고로 알아두면 좋은 기계에서 오브젝트 뽑는 법이다.

```js
function 기계() {
  this.이름 = '동욱';
}

var 오브젝트 = new 기계();
```

이렇게 new 키워드를 이용하면 새로운 오브젝트를 꺼낼 수 있다.

그리고 새로운 오브젝트는 {이름 : '동욱'} 이라는 값을 가지고 있다. (this 라는 키워드 덕분임)

<br>
<br>
<br>

# 4. eventlistener 안에서 쓰면 this는 e.currentTarget이라는 의미이다.

```js
document.getElementById('버튼').addEventListener('click', function (e) {
  console.log(this);
});
```

여기서 this를 소환하면 이것은 바로 e.currentTarget이라는 뜻과 똑같은 의미이다.

<span style=color:red>**e.currentTarget은 지금 이벤트가 동작하는 곳**</span>을 뜻한다.

매우 간단히 설명하면 지금 addEventListener 부착된 HTML 요소를 뜻한다고 보면 된다.

의심되면 e.currentTarget, this, document.getElementById('버튼') 이거 세개를 각각 출력해보자.

이게 this의 마지막 뜻이다.

<br>
<br>
<br>

# case 1. 이벤트리스너 안에서 콜백함수를 쓴다면 this는?

이런 코드를 쓴다고 가정해보자.

```js
document.getElementById('버튼').addEventListener('click', function (e) {
  var 어레이 = [1, 2, 3];
  어레이.forEach(function () {
    console.log(this);
  });
});
```

이벤트리스너 안에서 forEach() 라는 반복문을 사용했다.

forEach() 반복문을 사용할 땐 안에 function(){} 콜백함수를 집어넣어서 사용하게 되어있다.

<br>

**Q. 위의 코드에서 this를 출력하면 무엇이 나올까?**

**A. 저렇게 쌩으로 있는 콜백함수는 그냥 일반함수랑 똑같기 때문에 window가 출력된다.**

this의 값은 this가 어떤 함수안에 들어있는지만 잘 체크하면 쉽게 알 수 있다.

<br>
<br>
<br>

# case 2. 오브젝트 안에서 콜백함수를 쓴다면 this는??

```js
var 오브젝트 = {
  이름들 : ['동욱', '철수', '영희']
  함수 : function() {
    오브젝트.이름들.forEach(function() {
      console.log(this)
    })
  }
}
```

오브젝트라는 오브젝트 안에 이름들, 함수라는 자료를 각각 저장했다.

함수라는 자료 안에 forEach 반복문을 돌렸는데,

<br>

**Q. 그럼 여기 안에서의 this값을 출력하면 뭐가나올까?**

**A. this값을 판단할 땐 가장 가까이 있는 함수를 살펴보면 된다.**

forEach() 안에 있는 함수에 this가 들어있다.

근데 이 함수는 무슨 뭐 특별한 역할을 하는 함수가 아니다.

그냥 일반 함수일 뿐이다.

그래서 이것도 window이다.

<br>
<br>
<br>
<br>
<br>

그래서 this값은 function을 만날 때마다 바뀔 수 있기 때문에

내가 원하는 this를 쓰기 힘든 경우가 있다.

그럴 땐 함수를 arrow function으로 바꿔보길 바란다.

```js
var 오브젝트 = {
  이름들: ['동욱', '철수', '영희']
  함수: function() {
    오브젝트.이름들.forEach(()=> {
      console.log(this)
    })
  }
}
```

자바스크립트 ES6 문법 중,

function () {} 대신 쓸 수 있는 () => {} 이라는 arrow function 문법이 있다.

이걸 쓰면 함수 내부의 this값을 새로 바꿔주지 않기 때문에 this를 사용할 때 유용하다.

심심하면 사용하길 바란다.(아니면 애초에 this키워드를 쓰지말자.)
