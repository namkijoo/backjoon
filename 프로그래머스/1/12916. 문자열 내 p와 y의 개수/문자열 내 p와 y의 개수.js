function solution(s){
    var p=0
    var y=0
    for(let i=0; i<s.length; i++){
        if(s[i]=="p"){
           p+=1 
        }
        if(s[i]=="y"){
           y+=1 
        }
        if(s[i]=="P"){
           p+=1 
        }
        if(s[i]=="Y"){
           y+=1 
        }
    }
    if(p==y){
        return true
    }
    else{
        return false
    }
}