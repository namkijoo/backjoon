function solution(n, arr1, arr2) {
    var answer = [];
    
    var oneAnswer=[]
    var twoAnswer=[]
    for(let k=0; k<n; k++){
        var one=(arr1[k].toString(2).split(""))
        var two=(arr2[k].toString(2).split(""))
        while(one.length<n){
            one.unshift("0")
        }
        while(two.length<n){
            two.unshift("0")
        }
        oneAnswer.push(one)
        twoAnswer.push(two)
    }
    for(let i=0; i<n; i++){
        var answer2=""
        for(let j=0; j<n; j++){
            if(oneAnswer[i][j]=="1" || twoAnswer[i][j]=="1"){
                answer2+="#"
            }
            if(oneAnswer[i][j]=="0" && twoAnswer[i][j]=="0"){
                answer2+=" "
            }
            
        }
        answer.push(answer2)
    }
    
    
    return answer;
    
}