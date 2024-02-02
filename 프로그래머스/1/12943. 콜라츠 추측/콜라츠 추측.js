function solution(num) {
    var result=0
   
    while(num!=1){
         if(result>=500){
            return -1
            }
        if(num%2==0){
            num/=2
            result+=1
            continue
        }
        if(num%2==1){
            num=num*3+1
            result+=1
            continue
        }
        
    }
    return result
    
}