function solution(nums) {
    const hashMap = new Map()
    let n = nums.length/2
    let setNums = [...new Set(nums)]
    if(setNums.length>=n){
        return n
    }else{
        return setNums.length
    }
}