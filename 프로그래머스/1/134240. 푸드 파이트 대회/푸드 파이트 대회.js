function solution(food) {
    var result=""
    var word=""
    for(let i=0; i<food.length; i++){
        word+=i.toString().repeat(food[i]/2)
        result+=i.toString().repeat(food[i]/2)
    }
    result=result+"0"
    result+=word.split('').reverse().join("")
    console.log(result.split('').reverse().join(""))
    return result;
}