export const wiggleMaxLength = function(nums: number[]): number {
    if (nums.length <= 1) {
        return nums.length;
    }
    let f: number[][] = new Array(nums.length).fill([]).map(() => new Array(2).fill(0));
    f[0][0] = 1;
    f[0][1] = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            f[i][0] = f[i-1][1] + 1;
            f[i][1] = f[i-1][1]; // 保持
        } else if (nums[i] < nums[i-1]) {
            f[i][1] = f[i-1][0] + 1;
            f[i][0] = f[i-1][0]; // 保持
        } else {
            f[i][0] = f[i-1][0]; // 保持
            f[i][1] = f[i-1][1]; // 保持
        }
    }

    return Math.max(...f[nums.length - 1]);
    
//     let p=1;
//     let q=1;

//     for (let i=1; i<nums.length; i++)
//     {
//         if (nums[i]>nums[i-1])
//             p=q+1;
//         else if (nums[i]<nums[i-1])
//             q=p+1;
//     }

//     return Math.max(p,q);
};