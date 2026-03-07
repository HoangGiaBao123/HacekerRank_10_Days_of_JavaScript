function getSecondLargest(nums) {
    let max = 0;
    let largestNum;
    let i;
    
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    
    largestNum = max;
    
    const noLargestNum = nums.filter(n => n != largestNum);
    
    max = 0
    
    for (i = 0; i < noLargestNum.length; i++) {
        if (noLargestNum[i] > max) {
            max = noLargestNum[i];
        }
    }
    
    let secondLargestNum = max
    return secondLargestNum;
}
