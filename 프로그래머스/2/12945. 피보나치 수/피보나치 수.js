function solution(n) {
    var answer = 0;
    let stack=[]
    stack.push(0)
    stack.push(1)
    if(n===0){
        return 0
    }else if(n===1){
        return 1
    }else{
        for(let i=2; i<=n; i++){
            stack.push((stack[i-1]+stack[i-2])%1234567)
        }
    }
    return stack[n]%1234567
}