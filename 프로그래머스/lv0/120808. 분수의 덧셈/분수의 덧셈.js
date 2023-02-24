function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    const denom = numer1 * denom2 + numer2 * denom1;
    const numer = denom1 * denom2;
    
    let minNumber;
    if(denom > numer) {
        minNumber = numer;
    } else {
        minNumber = denom;
    }
    
    // 나누어떨어지는것 -> 나머지가 0인것.
    while(true) {
      if(denom % minNumber === 0) {
        if(numer % minNumber === 0) {
          // minNumber은 최대공약수
          return [denom/minNumber, numer/minNumber];
        }
      } 
      minNumber = minNumber - 1;
    }
    
    
    // minNumber 에는 작은 수가 들어가 있음.
    return answer;
}

// 1. 통분 -> 더하기
// 2. 분자분모의 최대공약수로 나눠줌
// 2-1. 분자분모중 작은 수를 찾기
// 2-2. 작은수를 분자분모로 나눠보기
// 2-2-1. 둘 다 나누어 떨어지면 그 나눈 수가 최대공약수
// 2-2-2. 안 나누어떨어지면 작은 수를 1줄이고 2-2돌아가기