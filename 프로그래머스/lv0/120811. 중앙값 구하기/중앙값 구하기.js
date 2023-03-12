function solution(array) {
    
    let arrCnt = 0;
    let newArray = [];
    while(arrCnt < array.length) {
        let cnt = 0;
        let minNumber = 1000;
        while(cnt < array.length) {
            if(minNumber > array[cnt]) {
                minNumber = array[cnt];
            }
            cnt++;
        } // minNumber 찾음.
        newArray.push(minNumber);

        let cnt2 = 0;
        while(cnt2 < array.length) {
            if(array[cnt2] === minNumber) {
                array[cnt2] = 1000;
                break;
            }
            cnt2++;
        }
        arrCnt++;
    } // 정렬 끝
    
    let middleIndex = Math.floor(array.length / 2);
    return newArray[middleIndex];
}
// 1. 정렬
// 1-1. 배열 중 가장 작은값을 찾는다.
// 1-2. 찾으면 새 배열에 넣는다.
// 1-3. 원래 배열에 찾은 값은 지운다.
// 1-4. 만약 원래배열 길이만큼 반복했으면 끝낸다. 아니면 1-1로 돌아간다.

// 2. 가운데 값 꺼내기