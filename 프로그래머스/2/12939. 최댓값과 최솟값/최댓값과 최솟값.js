function solution(s) {
    var answer = s.split(" ").map(Number)
    let maxNum=Math.max(...answer)
    let minNum=Math.min(...answer)
    
    return `${minNum} ${maxNum}`
}