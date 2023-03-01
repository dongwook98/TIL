function solution(slice, n) {
    var answer = Math.ceil(n/slice);
    return answer;
}
// 10명 1조각 10판
// 10명 2조각 5판
// 10명 3조각 4판 10/3 3.xx 올림해야함
// 10명 4조각 3판 10/4 2.xx 올림
// 10명 5조각 2판 