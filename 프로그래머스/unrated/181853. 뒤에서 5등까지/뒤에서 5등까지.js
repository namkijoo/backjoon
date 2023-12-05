function solution(num_list) {
    var answer = [];
    var result=[]
    answer = num_list.sort((a,b)=>a-b)
    for(var i=0;i<5;i++){
        result.push(answer[i])
    }
    return result;
}