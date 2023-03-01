function solution(num_list) {
    let i = num_list.length-1
    let newArr = [];
    while(i > -1) {
        newArr.push(num_list[i]);
        i = i - 1;
    }
    return newArr
}

// 정수배열 num_list
// num_list의 원소의 순서를 거꾸로 뒤집은 배열 리턴

// 마지막요소부터차례대로 새로운배열에 추가

// [1,2,3,4,5]
// 5 = num_list[num_list.length-1]