function solution(numbers) {
    let arr = [];
    // for(let i = 0; i<numbers.length; i++) {
    //    arr.push(2 *  numbers[i])
    // }
    let i = 0;
    while(i < numbers.length) {
        arr.push(numbers[i] * 2);
        i++;
    }
    return arr
}
// numbers [1,2,3,4,5]

// 1. numbers에서 원소를 꺼내야함
// 2. 원소를 꺼내 2배를 한 후 새 배열에 넣어준다.