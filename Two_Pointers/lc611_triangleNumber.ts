export const triangleNumber = (nums: number[]): number => {
    nums.sort((a, b) => a - b);
    let ret = 0;
    
    for (let i = nums.length - 1; i >= 2; i--) {
        let left: number = 0, right: number = i - 1;
        
        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                ret += right - left;
                right--;
            } else {
                left++;
            }
        }
    }
    
    return ret;
};