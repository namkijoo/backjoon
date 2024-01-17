function solution(sizes) {
    var maxNum=0
    var minNum=0
    for(let i=0; i<sizes.length; i++){
        let max
        let min
        if(sizes[i][0]>sizes[i][1]){
            max=sizes[i][0]
            min=sizes[i][1]
        }
        else{
            min=sizes[i][0]
            max=sizes[i][1]
        }
        if(maxNum<max){
            maxNum=max
        }
        if(minNum<min){
            minNum=min
        }
    }
    return(maxNum*minNum)
}