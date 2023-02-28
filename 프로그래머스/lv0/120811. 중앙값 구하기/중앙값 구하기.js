function solution(array) {
   
    
    let k=0;
    let newArr = [];
    
    while(k < array.length) {
        let minNum = 1000;
        
        // 1-1. 최소값구하기
        let i=0;
        while(i<array.length) {
            if(minNum > array[i]){
                minNum = array[i];
            }
            i++
        }

        // 1-2. 찾으면 새배열에 최소값넣기
        newArr.push(minNum);

        // 1-3. 원래 배열에서 찾은값 지우기
        let j=0;
        while(j<array.length) {
            if(minNum === array[j]) {
                array[j] = 1000;
                break;
            }
            j++
        }
            k++
        }
    console.log(newArr)
    return newArr[Math.floor(array.length / 2)]
}
// [9, -1, 0]
// 1.배열정렬해줌
// 1-1. 배열 중 가장 작은 값을 찾는다.
// 1-2. 찾으면 새 배열에 넣는다.
// 1-3. 원래 배열에 찾은 값은 지운다.
// 1-4. 만약 원래배열 길이만큼 반복했으면 끝낸다. 아니면 1-1로 돌아간다.
// 2.가운데 값 꺼내기
