function solution(num1, num2) {
    // console.log("Mf(-1.1)", Math.floor(-1.1)); 출력: -2
    // console.log("parseInt(-1.1)", parseInt(-1.1)); 출력: -1
    return Math.floor(num1 / num2 * 1000)
   
                
    // 1. parseInt는 원래 문자를 받는 함수이다. string -> number 로 형변환
    // 2. 10진수 추론을 위해 string 앞 2글자가 Ox나 OX 인지 비교
    // parseInt는 위 두가지 과정을 더 거쳐야해서 성능이 더 떨어질수도 있다.
}

// 1. num1을 num2로 나눈다.
// 2. 나눈 값에 1000을 곱한다.
// 3. 그 값에 정수부분을 구한다. : Math.floor()