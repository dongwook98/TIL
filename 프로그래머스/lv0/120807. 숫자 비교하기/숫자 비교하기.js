function solution(num1, num2) {
    // num1 과 num2 가 같다면 1리턴 
    if(num1 === num2) {
        return 1
    } else {
        return -1
    }
    return answer; // <- 실행 될 가능성이 있나? 
    // 0퍼센트이다. 
    // 왜냐하면 return을 만나면 함수가 종료된다.
    // if문 조건식 안에는 true 아니면 false 두가지 경우가 올 수 있는데 
    // true일때는 return 1 을 만나서 함수가 종료되고 
    // false일때는 return -1 을 만나서 함수가 종료되기 때문이다.
}

// 1. 두수가 같은지 비교 => 비교연산자
// 2. 비교 결과에 따라 1 , -1 => 조건문
