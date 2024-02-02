function solution(phone_number) {    
    let len = phone_number.length;
    let st= "*".repeat(len-4)+phone_number.slice(-4)
    return st
}