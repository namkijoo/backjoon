function solution(name, yearning, photo) {
    var answer = [];
    for(let i=0; i<photo.length; i++){
        var sum=0
        for(let j=0; j<photo[i].length; j++){
            if(name.includes(photo[i][j])){
                var number = name.indexOf(photo[i][j])
                sum+=yearning[number]
            }
        }
        answer.push(sum)
    }
    return answer;
}