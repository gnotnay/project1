export const removeDuplicates = (nums: number[]): number => {
    let left: number = 1;
    let counter: number = 1;

    for (let right = 1; right < nums.length; right++) {
        if (nums[right] === nums[right - 1]) {
            counter++;
        } else {
            counter = 1;
        }
        if (counter <= 2) {
            nums[left++] = nums[right];
        }
    }
    
    return left;
};