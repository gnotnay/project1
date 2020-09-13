export const rob = (nums: number[]): number => {
    if (nums.length === 0) {
        return 0;
    }
    
    let f: number[] = new Array(nums.length).fill(0);
    f[0] = nums[0];
    f[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
    //  这次             上次抢了    上上次抢了+ 这个价值
        f[i] = Math.max(f[i - 1], f[i - 2] + nums[i]);
    }
    
    return f[nums.length - 1];
};