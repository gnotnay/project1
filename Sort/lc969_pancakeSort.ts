export const pancakeSort = (A: number[]): number[] => {
    let ret: number[] = [];
    for (let i = A.length; i > 0; i--) {
        let j: number = 0;
    
        while (A[j] !== i) {
            j++;
        }
        /**
         * 可证明：
         *      任意一个数，可通过两次翻转得到正确位置。从大到小开始排列，找到需要排列的数
         *      第一次翻转到A[0],
         *      第二次翻转到A[i]
         */
        _reverse(A, j);
        ret.push(j + 1); // zero-base index
        _reverse(A, i - 1); // zero-base index
        ret.push(i);
    }
    
    return ret;
    
    function _reverse(arr: number[], index: number): void {
        for (let i = 0, j = index; i < j; i++, j--) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
};