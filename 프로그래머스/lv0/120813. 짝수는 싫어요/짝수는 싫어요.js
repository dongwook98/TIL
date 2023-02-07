function solution(n) {
    // 홀수 : n % 2 === 1
    let arr = [];
   
    // 1 % 2 === 1
    // 2 % 2 === 1 인지 비교
    // 3 % 2 === 1
    // ...
    // n % 2 === 1 
    for(let i=1; i<=n; i++) {
        if(i % 2 ===1) {
            arr.push(i)
        }
    }
    
    
    return arr
}