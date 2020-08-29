export const findKthLargest = (nums: number[], k: number): number => {
    let start: number = Math.min(...nums);
    let end: number = Math.max(...nums);
    
    while (start + 1 < end) {
        const mid = start + ((end - start) >> 1);
        
        if (_countLarger(nums, mid) >= k) {
            start = mid;
        } else {
            end = mid;
        }
    }
    
    if (_countLarger(nums, end) >= k) {
        return end;
    }
    
    return start;

    function _countLarger(nums: number[], n: number): number {
        let counter = 0;
        
        for (let num of nums) {
            if (num >= n) {
                counter++;
            }
        }
        
        return counter;
    }
};