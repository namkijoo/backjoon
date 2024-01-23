function solution(k, m, score) {
    score = score.sort((a,b)=>b-a)
    var len=score.length
    var result=0
    var n=0
    while(len>=m){
        var num=score.slice(n,m+n)
        result+=Math.min(...num)*m
        len-=m
        n+=m
    }
    return result
}