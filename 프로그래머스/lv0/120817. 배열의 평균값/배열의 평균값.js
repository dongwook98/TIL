function solution(numbers) {
    let sum = 0;
    let i = 0;
    while(i<numbers.length) {
        sum = sum + numbers[i]
        i++;
    }
    return sum / numbers.length
    
}

// 정수 배열 numbers
// numbers의 원소의 평균값

// 1. numbers 요소를 다 더한다.
// 1-1. 더한 값을 누적시킬 변수를 만든다.(sum)
// 2. 더한거를 numbers의 길이로 나눈다. 