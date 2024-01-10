function solution(n)
{
    var answer = 0;
    answer=n.toString()
    var sum=0
    for(var i=0; i<answer.length; i++){
        sum +=parseInt(answer[i])
    }
    

    return sum;
}