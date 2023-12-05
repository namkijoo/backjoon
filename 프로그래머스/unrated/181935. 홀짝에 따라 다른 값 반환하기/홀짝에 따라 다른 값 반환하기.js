function solution(n) {
    if(n%2==1){
        var sum1=0
        for(var i=1;i<n+1; i++){
            if(i%2==1){
                sum1+=i
            }
        }
        return sum1
    }
    if(n%2==0){
        var sum2=0
        for(var i=1;i<n+1; i++){
            if(i%2==0){
                sum2+=i**2
            }
        }
        return sum2
    }
}