const fs = require("fs")
const [len, ...array]=fs.readFileSync("/dev/stdin").toString().trim().split("\n")

function check(words){
    let stack=[]
    for(const word of words){
        if(word==="("){
            stack.push("(")
        }
        else if(word===")"){
            if(stack.length===0){
                console.log("NO")
                return
            }else{
                stack.pop()
            }
        }
    }
    if(stack.length>0){
        console.log("NO")
    }else{
        console.log("YES")
    }
}

for(let i=0; i<array.length; i++){
    check(array[i])
}