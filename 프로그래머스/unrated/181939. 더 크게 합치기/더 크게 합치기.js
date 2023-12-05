function solution(a, b) {
    var word1 = String(a)+String(b);
    var word2= String(b)+String(a)
    if(Number(word1)>=Number(word2)){
        return Number(word1)
    }
    else if(Number(word2)>Number(word1)){
        return Number(word2)
    }
}