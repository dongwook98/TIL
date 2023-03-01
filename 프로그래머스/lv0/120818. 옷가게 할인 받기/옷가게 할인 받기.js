function solution(price) {
    let 지불해야할금액 = 0;
   if(price >= 500000) {
       return Math.floor(price * 0.8);
   } else if(price >= 300000) {
       return Math.floor(price * 0.9);
   } else if(price >= 100000) {
       return Math.floor(price * 0.95);
   }
    return price
}

// 10만원이상사면 5%할인
// 30만원이상사면 10%할인
// 50만원이상사면 20%할인