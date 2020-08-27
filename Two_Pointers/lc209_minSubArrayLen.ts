export const minSubArrayLen = (s: number, nums: number[]): number => {
    let left: number = 0, right: number = 0;
    let sum: number = 0;
    let ret: number = nums.length + 1;
    
    while (left <= right && right < nums.length) {
        sum += nums[right];
        
        while (sum >= s) {
            ret = Math.min(ret, right - left + 1);
            sum -= nums[left]
            left++;
        }
        
        right++;
    }
    
    return ret === nums.length + 1 ? 0 : ret;
};