function solution(n) {
    let pizzaCount = Math.ceil(n/7);
    return pizzaCount;
}

// 1명~7명 1판 (1~7)/7 == 0.xx ~ 1 올림 하면 되겠네
// 8명~14명 2판 (8~14)/7 == 1.xx ~ 2 올림 하면 되겠네
// 15명~21명 3판 (15~21)/7 == 2.xx ~ 3 올림 하면 되겠네
// ...
// n명 n/7 
