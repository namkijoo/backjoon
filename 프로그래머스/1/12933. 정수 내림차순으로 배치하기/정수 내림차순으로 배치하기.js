function solution(n) {
    var result=String(n).split('')
    var result2=result.sort((a,b)=>b-a).join('')
    return(Number(result2))
}