# .forEach()

```js
const arr = [1, 2, 3, 4, 5];

arr.forEach((element, index) => {
  console.log(element, index);
});
```

출력 :
1 0
2 1
3 2
4 3
5 4

for이 있는데 forEach쓰는이유??

▶︎ for보다 성능이 안좋은데

**배열메서드들은 연달아 썼을때 편리한게 많다.**

forEach는 배열 요소를 각각 반복을 하는데 요소 각각에 콜백함수를 실행해준다.

<br>
<br>

# .map()

```js
const array = [1, 2, 3, 4];

array.map((element, index) => {
  return element * 2;
});

console.log(array); // (4) [1, 2, 3, 4]
```

출력 : (4) [2, 4, 6, 8]

<br>

map은 forEach의 역할을 하고

return이 있어서 그 return 에 적혀져있는대로 새로운 배열을 만들어준다.

**기존배열은 그대로 보존한다.**

<br>
<br>

# 그래서 왜 forEach랑 map을 쓸까?

**배열의 map이나 forEach 이런것들을 쓰면 연달아서 사용할 수 있다.**

```js
Array(9); // (9) [empty × 9]
```

위 코드는 길이가 9인 빈 배열을 만드는 방법이다.

<br>
<Br>

```js
Array(9).fill();
// (9) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
```

`.fill()` 괄호안에 비어있으면 각각의 요소가 undefined로 채워진다.

**`.fill()`도 기존배열을 그대로 보존하면서 새로운 배열을 만들어준다.**

<br>
<br>

위 코드를 이용해서 `[1, 2, 3, 4, 5, 6, 7, 8, 9]`를 만들고 싶다면 어떻게 해야할까?

```js
Array(9)
  .fill()
  .map((el, idx) => {
    return idx + 1;
  }); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

**이렇게 위 코드들처럼 배열의 메소드들은 연달아 쓸 수 있어 편리하다.**

<br>
<br>

만약 for문 으로 한다면 빈배열 만들어주고 push해주고 그래야할것이다..

```js
let arr = [];
for (let i = 0; i < 9; i++) {
  arr.push(i + 1);
}
```
