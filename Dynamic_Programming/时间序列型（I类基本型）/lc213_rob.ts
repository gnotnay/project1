export const rob = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    
    if (nums.length === 1) return nums[0];
    
    let f: number[] = new Array(nums.length).fill(0);
    
    f[0] = nums[0]; // 抢了第一个
    f[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        f[i] = Math.max(f[i - 1], f[i - 2] + nums[i])
    }
    let max1 = f[f.length - 2]; // 最后一个不能抢
    
    f[0] = 0; // 第一个不能抢
    f[1] = nums[1];
    for (let i = 2; i < nums.length; i++) {
        f[i] = Math.max(f[i - 1], f[i - 2] + nums[i])
    }
    let max2 = f[f.length - 1]; // 抢了最后一个
    
    return Math.max(max1, max2);
};