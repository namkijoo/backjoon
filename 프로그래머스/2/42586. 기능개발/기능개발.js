function solution(progresses, speeds) {
    var answer = [];

    const daysLeft=progresses.map((progress,index)=>(
        Math.ceil((100-progress)/speeds[index])
    ))
    
    console.log(daysLeft)
    let count =0;
    let maxDay=daysLeft[0]
    
    for(let i=0; i<progresses.length; i++){
        if(daysLeft[i]<=maxDay){
            count++
        }else{
            answer.push(count)
            count=1
            maxDay=daysLeft[i] 
        }
    }
    
    answer.push(count)
    return answer;
}