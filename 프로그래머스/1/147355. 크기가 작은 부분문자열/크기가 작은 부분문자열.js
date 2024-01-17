function solution(t, p) {
    var result=0
    for(let i=0; i<t.length-p.length+1; i++){
        if(parseInt(t.substring(i,i+p.length))<=parseInt(p)){
            result+=1
            console.log(t.substring(i,i+p.length))
        }
    }
    return result
}