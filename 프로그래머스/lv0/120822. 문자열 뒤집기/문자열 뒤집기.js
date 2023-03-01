function solution(my_string) {
    let newString = '';
    
    let i = my_string.length-1
    while(i > -1) {
        newString = newString + my_string[i];
        i = i - 1;
    }
    return newString;
}

// 입력 : 문자열 my_string
// 출력 : my_string 거꾸로 뒤집은 문자열

// 1. 마지막문자열부터차례대로 새로운문자열에 넣어준다.
// 1-1. 새로운문자열을 저장할 변수생성 newString
// 2. 새로운문자열 리턴.