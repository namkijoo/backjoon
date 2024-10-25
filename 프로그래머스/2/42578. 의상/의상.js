function solution(clothes) {
    let answer = 1
    let sH = new Map(); 
    for(let [value, key] of clothes){ 
       sH.set(key, sH.get(key)+1 || 1); 
    }
    for(let [key, value] of sH){ 
        answer *= value+1 
    }
   return answer-1 
}