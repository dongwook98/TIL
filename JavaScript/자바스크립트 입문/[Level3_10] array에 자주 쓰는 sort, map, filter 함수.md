# array에 자주 쓰는 sort, map, filter 함수

오늘은 상품 가격순 정렬버튼과 기능을 만들어봅시다.

\- products라는 변수안에 있던걸 가격순으로 정렬하고

\- 카드들 전부 싹 지우고 products 변수에 있던 순서대로 카드 다시 생성하면

완성일 것 같은데 array 정렬하는 법부터 알아봅시다.

<br>
<br>
<br>

# array 정렬하는 법

array 자료는 순서개념이 있다보니 정렬도 가능합니다.

그냥 문자 가나다순으로 정렬하려면 .sort() 붙이면 되는데

숫자정렬은 이렇게 코드짜면 됩니다.

<br>
<br>

```js
var 어레이 = [7, 3, 5, 2, 40];
어레이.sort(function (a, b) {
  return a - b;
});

console.log(어레이);
```

이러면 숫자순으로 잘 출력됩니다.

근데 왜 저렇게 코드짜면 숫자순 정렬이 되는지 알고싶지 않습니까

코드 동작원리 이런걸 알면 나중에 응용도 쉽게 가능하기 때문에 sort() 동작원리를 알아봅시다.

<br>
<br>

```js
어레이.sort(function (a, b) {
  return a - b;
});
```

1. a, b는 array 안의 자료들입니다.

2. return 오른쪽이 양수면 a를 오른쪽으로 정렬해줍니다.

3. return 오른쪽이 음수면 b를 오른쪽으로 정렬해줍니다.

4. 그리고 array 안의 자료들을 계속 뽑아서 a, b에 넣어줍니다.

이렇게 동작해서 a - b 저렇게 쓰면 숫자순 정렬이 되는 것입니다.

<br>

예를 들면 a, b가 7과 3일 경우 7 - 3 하면 4가 남습니다.

4는 양수죠? 그러면 7을 3보다 오른쪽으로 보내줍니다.

그래서 숫자 오름차순 (123순) 정렬이 완성되는 것입니다.

<br>
<br>

Q. 그럼 array 안의 숫자 내림차순 (321순) 정렬은 어떻게 할까요?

```js
어레이.sort(function (a, b) {
  return b - a;
});
```

<br>
<br>

**Q. 문자정렬과 문자역순정렬은 어떻게 할까요?**

**var 어레이 = ['다', '가', '나'];**

이런 자료가 있을 때 가나다순, 다나가순 정렬은 각각 어떻게 할지도 고민해봅시다.

## ✍️ 풀이

```js
어레이2.sort(function (a, b) {
  if (a > b) {
    return -1; // 앞에온 문자가 더 크다면 음수를 리턴해서 b를 오른쪽으로 보내기
  } else if (a < b) {
    return 1; // 뒤에온 문자가 더 크다면 양수를 리턴해서 b를 왼쪽으로 보내기
  }
});
```

<br>
<br>

# 버튼누르면 products를 가격순 정렬해봅시다

우리가 계속 다루고 있는 var products 라는 array가 하나 있는데

[ { }, { }, { } ] 이렇게 생겼습니다.

안에 있는 { } 이것들을 가격 낮은순으로 정렬하려면 어떻게 코드를 짜야할까요?

sort 동작원리 잘 떠올리면 됩니다.

```js
var products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

products.sort(function (a, b) {
  return a.price - b.price;
});
```

<br>
<br>
<br>

# products 자료는 정렬했는데 왜 html은 정렬안되는 것임?

컴퓨터는 시키는 것만 하는 노예일 뿐이라

컴퓨터에게 뭘 기대하면 안됩니다. 여러분이 html도 새로 만들라고 코드짜면 됩니다.

<br>

1. 가격순 정렬버튼 누르면

2. products 자료를 가격순으로 정렬해주세요

3. 지금 있는 카드 3개 지우고 products 갯수만큼 카드를 새로 만들어주세요

라고 코드짜면 실제로 상품목록이 정렬되는 모습도 확인할 수 있을듯요

<br>

```js
document.querySelector('#price-align').addEventListener('click', function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });

  document.querySelector('.row').innerHTML = '';
  for (let i = 0; i < products.length; i++) {
    let 템플릿 = `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${products[i].title}</h5>
          <p>가격 : ${products[i].price}</p>
          </div>`;

    document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿);
  }
});
```

1. 그래서 id="price" 인 버튼 만들고

2. 누르면 products 자료 정렬하라고 했고

3. 상품목록 html 싹 비우고 새로 3개 넣으라고 했다. 데이터바인딩도 잘 했다.

이제 정렬버튼 누르면 상품3개가 잘 정렬된다.

<br>
<br>
<br>

# array에 자주 쓰는 filter 함수

array 자료에서 원하는 자료만 필터링하고 싶으면 filter 함수를 쓴다.

```js
var 어레이 = [7, 3, 5, 2, 40];

var 새어레이 = 어레이.filter(function (a) {
  return 조건식;
});
```

1. a라고 작명한건 array 에 있던 데이터를 뜻하고

2. return 우측에 조건식을 넣으면 조건식에 맞는 a만 남겨준다.

3. 그리고 filter는 **원본을 변형시키지 않는 고마운 함수**기 때문에 새로운 변수에 담아써야한다.

<br>

```js
var 어레이 = [7, 3, 5, 2, 40];

var 새어레이 = 어레이.filter(function (a) {
  return a < 4;
});
```

예를 들어 여러 숫자가 있는데 그 중에 4 미만인 것만 남기고 싶으면 이렇게 쓰면 된다.

새어레이 출력해보면 [2, 3] 이것만 들어있다.

<br>

이런거 응용하면 쇼핑몰에서 "6만원 이하 상품만 보기" 이런 필터기능도 만들 수 있는 것이다.

products라는 자료에서 6만원 이하만 필터하고 새로 html 생성하면 될 것 같다.

<br>
<br>
<br>

# array에 자주 쓰는 map 함수

array 안의 자료들을 전부 변형하려면 map 함수를 쓴다.

```js
var 어레이 = [7, 3, 5, 2, 40];

var 새어레이 = 어레이.map(function (a) {
  return 수식같은거;
});
```

1. a라고 작명한건 array 에 있던 데이터를 뜻하고

2. return 우측에 변경될 수식같은걸 넣으면 된다.

3. 그리고 map은 **원본을 변형시키지 않는 고마운 함수**기 때문에 새로운 변수에 담아써야한다.

<br>
<br>

```js
var 어레이 = [7, 3, 5, 2, 40];

var 새어레이 = 어레이.filter(function (a) {
  return a * 4;
});
```

예를 들어 array 안의 숫자들을 전부 4를 곱해주고 싶으면 이렇게 코드짜면 된다.

새어레이 출력해보면 [28, 12, 20, 8, 160] 이게 들어있겠다.

 <br>

이런거 응용하면 쇼핑몰에서 "달러 -> 원화로 변환하기" 이런 기능도 만들 수 있다.

array 안에 있는 숫자들을 달러가격이라고 생각해보자.
이걸 전부 원화가격으로 변경하고 싶으면 어떻게하죠?

아마 map 써서 1000얼마(환율) 곱해주면 된다.

<br>
<br>

(참고)

**sort 함수는 원본을 변형**시켜버린다.

요즘 코드짤 때 원본을 변형시키는건 나중에 힘들어질 수 있어서

**array/object 자료 조작시엔 원본을 따로 복사해두고 조작하는 경우가 많다.**
