function solution(answers) {
    let answer = [];
    let patterns=[
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    let score=[0,0,0]
    for(let i=0; i<answers.length; i++){
        if(patterns[0][i%5]==answers[i]){
            score[0]++
        }
        if(patterns[1][i%8]==answers[i]){
            score[1]++
        }
        if(patterns[2][i%10]==answers[i]){
            score[2]++
        }
    }
    let maxNum=Math.max(...score)
    for (let j=0; j<score.length; j++){
        if(score[j]==maxNum){
            answer.push(j+1)
        }
    }
    return answer
}