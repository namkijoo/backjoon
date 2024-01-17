function solution(s) {
    var result=[]
    s=s.split('')
    for(let i=0; i<s.length; i++){
        var word=s.slice(0,i)
        if(word.includes(s[i])){
            
            result.push(i-word.lastIndexOf(s[i]))
            console.log(i,word.lastIndexOf(s[i]))
        }else{
            result.push(-1)
        }
    }
    return result;
}