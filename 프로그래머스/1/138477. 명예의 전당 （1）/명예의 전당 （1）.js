function solution(k, score) {
    var answer = [];
    var result=[]
    for(let i=0; i<score.length; i++){
        answer.push(score[i])
        answer.sort((a,b)=>a-b)
        if(answer.length>k){
            answer.shift()
        }
        result.push(answer[0])
    }
    return result;
}