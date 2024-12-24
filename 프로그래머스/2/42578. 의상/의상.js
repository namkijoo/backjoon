function solution(clothes) {
    const hashMap = new Map()
    let answer=1
    
    for(const [a,b] of clothes){
        hashMap.set(b,hashMap.get(b)+1||1)
    }
    
    for(const [a,b] of hashMap){
        answer*=b+1
    }
    
    return answer-1
    
}