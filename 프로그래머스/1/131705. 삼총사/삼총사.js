function solution(number) {
    var res=[]
    for(let i=0; i<number.length;i++){
        for(let j=i+1; j<number.length; j++){
            for(let k=j+1; k<number.length; k++){
                res.push(number[i]+number[j]+number[k])
            }
        }
    }
    
    return(res.filter((re)=>re===0).length)
}