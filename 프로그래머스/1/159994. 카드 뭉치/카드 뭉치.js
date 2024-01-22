function solution(cards1, cards2, goal) {
    var answer=0;
    for(let i=0; i<goal.length; i++){
        if(goal[i]===cards1[0]){
            cards1.shift()
            answer+=1
        }
        else if(goal[i]===cards2[0]){
            cards2.shift()
            answer+=1
        }
    }
    if(answer==goal.length){
        return "Yes"
    }
    else{
        return "No"
    }
    
}