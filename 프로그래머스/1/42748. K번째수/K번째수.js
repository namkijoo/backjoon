function solution(array, commands) {
    const answer=[]
   for(let i=0; i<commands.length; i++){
       let sliceCommands=array.slice(commands[i][0]-1,commands[i][1])
       console.log(sliceCommands)
       let sortedCommands=sliceCommands.sort((a,b)=>a-b)
       answer.push(sortedCommands[commands[i][2]-1])
   }
    return answer
}