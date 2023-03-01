function solution(price) {
    if(price >= 500000) {
       return Math.floor(price * 0.80);
    }
     if(price >= 300000) {
       return Math.floor(price * 0.90);
    }
    if(price >= 100000) {
       return Math.floor(price * 0.95);
    }
    // 위 조건에 만족하지않는경우 
    // ex) price == 50000
   return price;  
}

// 10만원이상사면 5%할인
// 30만원이상사면 10%할인
// 50만원이상사면 20%할인