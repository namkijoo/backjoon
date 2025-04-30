function solution(s) {
    let num = s.split(" ").map(Number)
    let minNum = Math.min(...num)
    let maxNum = Math.max(...num)
    return (`${minNum} ${maxNum}`)
    }