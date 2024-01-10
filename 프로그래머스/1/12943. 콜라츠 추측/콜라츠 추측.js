function solution(num) {
    var answer = num;
    var sum = 0
    while(answer!=1){
        if (sum==500){
            return -1
        }
        if(answer%2==0){
            answer=answer/2
            sum+=1
            continue
        }
        if(answer%2==1){
            answer=answer*3+1
            sum+=1
            continue
        }
    }
    return sum;
    
}