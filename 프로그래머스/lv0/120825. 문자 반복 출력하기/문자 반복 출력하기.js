function solution(my_string, n) {
    let result = '';
    let cnt = 0;
    while(cnt < my_string.length) {
        const repeatCharacter = my_string[cnt];
        cnt = cnt + 1;
        
        let repeatCnt = 0;
        while(repeatCnt < n) {
            result = result + repeatCharacter;
            repeatCnt = repeatCnt + 1;
        }
    }
    return result;
}
// 입력 : 'hello'
// 출력 : 'hhheeellllllooo'

// 1. my_string 문자열 순서대로 문자를 꺼낸다.
// 2. 꺼낸문자를 n번만큼 반복해서 result에 더해준다.