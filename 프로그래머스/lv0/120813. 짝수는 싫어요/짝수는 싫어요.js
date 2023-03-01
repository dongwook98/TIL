function solution(n) {
    let cnt = 0;
    let arr = [];
    while(cnt <= n) {
        if(cnt % 2 === 1){
            arr.push(cnt);
        }
        cnt++;
    }
    return arr
}