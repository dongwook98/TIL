function solution(array) {
    array.sort(function(a, b) {
       return a-b
    })
    
    let middle = parseInt(array.length/2)
    
    return array[middle]
               
       
       
       
       // 중앙값: 배열 5개 -> 인덱스2  parseInt(5/2) 
       // 중앙값: 배열 3개 -> 인덱스 1 parseInt(3/2)
    
    
    
}