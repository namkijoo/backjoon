function solution(s)
{
    let words=s.split('')
    let stack=[]
    
    for(const word of words){
        if(stack.length>0&&word===stack[stack.length-1]){
            stack.pop()
        }else{
            stack.push(word)  
        }
        
    }
    return (stack.length===0?1:0)
}