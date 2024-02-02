function solution(n) {
    var answer = [];
    var result=n.toString()
    for(let i=result.length-1; i>=0; i--){
        answer.push(Number(result[i]))
    }
    return answer
}