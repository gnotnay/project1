var findLengthOfShortestSubarray = function(arr) {
    /*
    1. [X X X] [X X X] [X X X X X]
        0   i           j
    */
    let left = 0, right = arr.length - 1;
    let ret = right;

    while (right - 1 >= 0 && arr[right] >= arr[right - 1]) {
        right--;
    }
    
    ret = right;
    if (ret === 0) return 0;

    for (left = 0; left < right; left++) {
        if (left - 1 >= 0 && arr[left] < arr[left - 1]) break;
        while (right < arr.length && arr[left] > arr[right]) {
            right++;
        }
        ret = Math.min(ret, right - left - 1);
    }
    
    return ret;
};