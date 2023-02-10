# sort, map, filter 상품정렬기능 숙제

# 숙제1. 버튼누르면 다나가순 정렬은

```html
<div class="container my-3">
  <button class="btn btn-danger" id="sort1">다나가순정렬</button>
</div>

<script>
  document
    .querySelector('#text-descending-order')
    .addEventListener('click', function () {
      products.sort(function (a, b) {
        if (a.title > b.title) {
          return -1;
        }
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
</script>
```

<br>
<br>
<br>

# 숙제2. 6만원이하 상품보기 버튼과 기능

```html
<script>
  document
    .querySelector('#price-filter')
    .addEventListener('click', function () {
      let newProducts = products.filter((el) => {
        return el.price <= 60000;
      });

      console.log(newProducts);

      document.querySelector('.row').innerHTML = '';

      for (let i = 0; i < newProducts.length; i++) {
        let 템플릿 = `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${newProducts[i].title}</h5>
          <p>가격 : ${newProducts[i].price}</p>
          </div>`;

        document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿);
      }
    });
</script>
```

<br>
<br>
<br>

```js
//일반함수
var newProduct = products.filter(function (a) {
  return a.price <= 60000;
});

//화살표함수
var newProduct = products.filter((a) => a.price <= 60000);
```

가독성보다는 그냥 코드를 줄이고 싶으면 arrow function 써도 될듯요

이 경우 함수에 파라미터가 1개면 소괄호 생략이 가능합니다.

함수 { } 안에 return 한 줄 밖에 없으면 중괄호와 return 동시에 생략가능합니다.

<br>
<br>
<br>

# 응용1. 가나다순 정렬버튼?

```html
<script>
  document
    .querySelector('#text-ascending-order')
    .addEventListener('click', function () {
      products.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        } else {
          return -1;
        }
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
</script>
```

<br>
<br>
<br>

# 응용2.`<input>`을 이용해 유저가 직접 가격을 입력해서 필터하는 기능?

```html
<script>
  document
    .querySelector('#user-price-filter')
    .addEventListener('change', function (e) {
      let newProducts = products.filter((el) => {
        return el.price == e.target.value;
      });

      console.log(newProducts);

      document.querySelector('.row').innerHTML = '';

      for (let i = 0; i < newProducts.length; i++) {
        let 템플릿 = `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${newProducts[i].title}</h5>
          <p>가격 : ${newProducts[i].price}</p>
          </div>`;

        document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿);
      }
    });
</script>
```
