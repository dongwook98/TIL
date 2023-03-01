function solution(array) {
    let sortedArray = array.sort((a,b) => a-b);
    let cnt=0;
    
    let 최빈값 = -1; // 최빈값이 뭔지
    let 최빈값repeatCnt = 0; // 최빈값이 될때 몇번 반복해서 된건지
    let repeatCnt = 0; // 현재 똑같은 숫자가 몇번 등장했는지
    let beforeNumber = -1; // 지금 보고있는 숫자 이전 숫자
    let isDup최빈값 = false;
    while(cnt < array.length){
        if(beforeNumber !== array[cnt]) {
            repeatCnt = 1;
        } else {
            repeatCnt = repeatCnt + 1;
        }
        
        if(repeatCnt === 최빈값repeatCnt) {
            if(최빈값 !== array[cnt]) {
                isDup최빈값 = true;
            }
        }
        
        if(repeatCnt > 최빈값repeatCnt) {
            최빈값 = array[cnt];
            최빈값repeatCnt = repeatCnt;
            isDup최빈값 = false;
        }
        beforeNumber = array[cnt];
        cnt++;
    }
    if(isDup최빈값) return -1;
    return 최빈값;
}



// 1. 앞에서부터 차례대로 원소를 확인하며 개수를 센다.
// 2. 최빈값을 그때그때 기록한다.

