function solution(x) {
    var sum=0
    var result=String(x).split("")
    for(var i=0; i<result.length; i++){
        sum+=Number(result[i])
    }
    if(x%sum==0){
        return true
    }
    else{
        return false
    }
}