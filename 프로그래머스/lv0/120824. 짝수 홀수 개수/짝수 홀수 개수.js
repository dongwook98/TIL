function solution(num_list) {
    let i=0;
    let even = 0;
    let odd = 0;
    while(i<num_list.length){
        if(num_list[i] % 2 === 0){
            even = even + 1;
        } else {
            odd = odd + 1;
        }
        i++
    }
    return [even, odd]
}

// 1. 배열요소들을 순서대로 짝수인지확인
// 1-1. 짝수라면 카운팅
// 1-1-1. 짝수 카운팅할 변수생성 even
// 2. 배열요소들을 순서대로 홀수인지확인
// 2-1. 홀수라면 카운팅
// 2-1-1. 홀수 카운팅할 변수생성 odd
// 3. 카운팅한 짝수,홀수개수를 배열에넣기