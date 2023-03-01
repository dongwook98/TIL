function solution(money) {
    let americanoCnt = Math.floor(money / 5500)
    let restMoney = money % 5500 
    return [americanoCnt, restMoney]
}

// money / 5500 의 몫 : 아메리카노 잔 수
// money / 5500 의 나머지 : 남는 돈 

//ex) money == 10000, 
// 10000 / 5500 == 1.xxx
// 10000 % 5500 == 4500