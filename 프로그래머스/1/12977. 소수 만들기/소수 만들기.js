function solution(nums) {
    var result=0
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                var sum = nums[i]+nums[j]+nums[k]
                var tf=false;
                for(let h=2; h<sum; h++){
                    if(sum%h==0){
                        tf=false
                        break
                    }
                    else{
                        tf=true
                    }
                }
                if(tf){result+=1}
            }
        }
    }
    return result;
}