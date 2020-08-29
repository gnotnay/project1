export const findBestValue = (arr: number[], target: number): number => {
    let start: number = 0, end: number = 10 ** 5;
    let preSum: number[] = [];
    
    let sum: number = 0;
    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        preSum.push(sum);
    }
    
    if (preSum[preSum.length - 1] <= target) {
        return arr[arr.length - 1];
    }

    while (start + 1 < end) {
        const mid: number = start + ((end - start) >> 1);
        let temp: number = _getSum(arr, mid, preSum);

        if (temp < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    
    if (Math.abs(_getSum(arr, start, preSum) - target) <= Math.abs(_getSum(arr, end, preSum) - target)) {
        return start;
    }
    
    return end;
};

const _getSum = (arr: number[], n: number, preSum: number[]) => {
    if (n >= arr[arr.length - 1]) { // all arr[i] are smaller than n, return the last preSum
        return preSum[preSum.length - 1];
    }
    
    let firstLargerIndex: number = arr.findIndex((e) => e > n);
    
    if (firstLargerIndex === 0) // all arr[i] are larger than n, return 
        return arr.length * n;
    
    return preSum[firstLargerIndex - 1] + (arr.length - firstLargerIndex) * n;
}