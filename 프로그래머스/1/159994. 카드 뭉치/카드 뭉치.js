function solution(cards1, cards2, goal) {
    let cards1Count=0
    let cards2Count=0
    for(const card of goal){
        if(cards1[cards1Count]==card){
            cards1Count++
        }
        if(cards2[cards2Count]==card){
            cards2Count++
        }
    }
    if(cards1Count+cards2Count===goal.length){
        console.log("Yes")
        return("Yes")
    }else{
        console.log("No")
        return("No")
    }
}