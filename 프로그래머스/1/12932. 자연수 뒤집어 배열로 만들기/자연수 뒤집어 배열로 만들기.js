function solution(n) {
    var answer = [];
    var str= n.toString().split("")
    str=str.reverse()
    for(var i=0; i<str.length; i++){
        answer[i]=parseInt(str[i])
    }
    return answer;
}