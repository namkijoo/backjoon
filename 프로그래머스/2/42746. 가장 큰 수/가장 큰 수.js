function solution(numbers) {
    let answer=""
    let strings= numbers.map(String)
    
    strings.sort((a,b) => (b+a) - (a+b))
    for(let i=0; i<strings.length; i++){
        answer+=strings[i]
    }
    return answer[0] === '0' ? '0' : answer;
}