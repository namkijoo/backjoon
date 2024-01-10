function solution(n) {
    var word = n.toString()
    var result= word.split("")
    result=result.sort((a,b)=>b-a).join('')
    console.log(result)
    return Number(result)
}