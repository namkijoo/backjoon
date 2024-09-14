function solution(numbers) {
    let sum = 0;
    let len=numbers.length
    for(const number of numbers){
        sum+=number
    }
    return sum/len;
}