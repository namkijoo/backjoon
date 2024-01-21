function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++){
        console.log(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)) 
        let result=array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)
        answer.push(result[commands[i][2]-1])
    }
    return answer
}