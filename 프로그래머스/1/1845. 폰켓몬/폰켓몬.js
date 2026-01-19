function solution(nums) {
  const num  = nums.length/2
  const answer = new Set(nums)
  if(num<answer.size){
      return num
  }else{
    return answer.size      
  }

}