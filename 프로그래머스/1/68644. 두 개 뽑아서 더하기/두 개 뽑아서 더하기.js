function solution(numbers) {
    var result=[]
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            result.push(numbers[i]+numbers[j])
        }
    }
    result = [...new Set(result)]
    result=result.sort((a,b)=>a-b)
    return result
}