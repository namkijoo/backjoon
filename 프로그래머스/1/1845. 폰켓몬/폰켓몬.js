function solution(nums) {
    const numSet = new Set(nums);
    const halfNumsLength = (nums.length / 2);
    return numSet.size > halfNumsLength ? halfNumsLength : numSet.size;
}