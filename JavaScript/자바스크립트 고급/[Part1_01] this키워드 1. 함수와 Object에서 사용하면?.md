# this 키워드를 알아보자 1. 함수와 Object에서 사용하면?

this 키워드는 뜻이 매우 다양하다.

사용하는 환경에 따라서 4개 이상의 각각 다른 뜻을 가지고 있는데

이번에 총정리 하자.

<br>
<br>
<br>

# 1-1. 그냥 쓰거나 함수 안에서 쓰면 this는 window를 뜻한다.

HTML 파일 아무거나 하나 만들고 중간에 `<script>` 태그 열어서

일단 this라는 키워드를 콘솔창에 출력해보자.

```js
console.log(this); // {window}
```

<br>
<br>

비슷하게 일반 함수 내에서 this라는 값을 불러보면

```js
function 간지나는함수() {
  console.log(this);
}

간지나는함수();
```

똑같이 this라는 값은 window라고 출력된다.

<br>

**Q.window가 뭔가요?**

**A.window는 모든 전역변수, 함수, DOM을 보관하고 관리하는 전역객체이다.**

<br>
<br>
<br>

# 1-2. strict mode일 때 함수 안에서 쓰면 this는 undefined 이다.

```html
<script>
  'use strict';

  function 간지나는함수() {
    console.log(this);
  }
  간지나는함수();
</script>
```

IE 10버전 이상에선 'use strict'라는 키워드를 페이지 최상단에 추가하면

strict mode로 자바스크립트를 작성가능하다.

strict mode에선 var 키워드 없이 변수를 선언하거나,

변수를 arguments라는 이상한 키워드로 선언하거나 그런 실수를 방지해준다.

strict mode에선 this키워드를 일반함수 안에서 불렀을 때 undefined라는 값으로 강제로 지정해준다.

<br>
<br>
<br>

# 2. object 자료형 내에 함수들이 있을 수 있는데 거기서 this값은 '주인님'을 뜻한다.

```js
var 오브젝트 = {
  data: 'kim',
  함수: function () {
    console.log(this);
  },
};

오브젝트.함수();
```

메소드 안에서 this를 쓰면 <span style=color:red>**this는 메소드를 가지고 있는 오브젝트**</span>를 뜻한다.

외우기 쉽게 this는 '메소드의 주인님'을 지칭한다.

<br>
<br>

```js
var 오브젝트2 = {
  data: {
    함수: function () {
      console.log(this);
    },
  },
};
오브젝트2.data.함수();
```

이 예제의 this는 무슨 값이 출력될까?

함수()를 담고있는 **오브젝트2.data** 라는게 위의 this랑 동일한 뜻이다.

<br>
<br>
<Br>

# 근데 놀라운 사실은 그냥 this라는 뜻은 2번만 알면 된다.

1번 즉, "일반 함수 내에서 썻을 때 this는 window입니다" 라는 정의는 굳이 외울 필요가 없다.

왜냐면 2번뜻을 잘 안다면 1번도 자연스럽게 유추가 가능하다.

<br>
<br>

우리가 함수나 변수를 스크립트 태그 안에 만들었을 때, 함수나 변수는 그냥 만들어지는게 아니다.

```html
<script>
  function 간지나는함수() {
    console.log();
  }
</script>
```

위에 만든 간지나는함수()는 전역변수나 전역함수를 관리하기 위한 window라는
오브젝트에 자동으로 추가가 된다.

<br />
<br />

```html
<script>
  // (1)
  function 간지나는함수() {
    console.log(this);
  }

  // (2)
  window.간지나는함수 = function () {
    console.log(this);
  };
</script>
```

그래서 코드(1) 코드(2) 둘 다 자바스크립트 입장에선 보면 똑같다.

<br>

(2)문법은 window라는 오브젝트에 함수 자료를 추가하는 문법일 뿐이다.

아무튼 결론은 전역함수 만들거나 전역변수를 만들면 저렇게 window {오브젝트} 안에 담긴다는 소리이다.

우리가 일부러 하지 않아도 변수나 함수 쌩으로 만들면 자바스크립트가 자동으로 알아서 window안에 담는다.

<br>
<br>
<br>

그래서 1번 : this를 함수안에서 썼을 땐 window가 나온다~ 라는건 안외워도 되고

**2번: this는 오브젝트 내의 메소드(함수)에서 사용했을 때 메소드의 주인님 오브젝트를 출력해준다~**

이것만 외우면 된다.

<br>
<br>
<br>

근데 난관이 있다. this의 얼탱이없는 3번 4번 뜻도 있기 때문이다.

다음장에서 알아보자..
