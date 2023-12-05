function solution(num_list) {
    var last_num= num_list.pop()
    var second_num = num_list.slice(-1)
    if(last_num>second_num){
        num_list.push(last_num)
        num_list.push(last_num-second_num)
    }
    else if(last_num<=second_num){
        num_list.push(last_num)
        num_list.push(last_num*2)
    }
    
    
    return num_list
}