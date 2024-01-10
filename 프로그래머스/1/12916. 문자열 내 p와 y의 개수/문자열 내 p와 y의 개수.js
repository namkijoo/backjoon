function solution(s){
    var answer = true;
    var p=0
    var y=0
    for(var i=0; i<s.length; i++){
        console.log(s[i])
        if(s[i]=="y" || s[i]=="Y"){
            y+=1
        }
        if(s[i]=="p" || s[i]=="P"){
            p+=1
        }
    }
    if(p==y){
        return true
    }
    else{
        return false
    }
}