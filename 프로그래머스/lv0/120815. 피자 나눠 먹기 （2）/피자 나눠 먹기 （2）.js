function solution(n) {
    let pizzaCount = 1;
    while(true) {
        if(pizzaCount * 6 % n === 0) {
            break;
        }
        pizzaCount = pizzaCount + 1;
    }
    return pizzaCount
}

// 1명일때, 1판 6조각씩 ok
// 2명일때, 1판 3조각씩 ok
// 3명일때, 1판 2조각씩 ok
// 4명일때, 1판 2조각남음 x , 2판 3조각씩 ok
// 5명일때, 1판 1조각남음 x, 2판 2조각남음 x, 3판 3조각남음 x,
// 4판 4조각남음 x, 5판 6조각씩 ok

// 17명 일때, 1~16 x , 17판 이어야 ok
// 피자 판수를 하나씩 늘리려면 .. 힘드니까 반복문 쓰자
// 사람 수와 피자 판수가 같으면 무조건 조건에 만족하니까 무한 반복해도 되겠다.
// 피자 판수를 하나하나씩 늘린다음 조건에 만족하는 피자판수를 뽑으면 되겠네