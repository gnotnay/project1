export const maximizeSweetness = (sweetness: number[], K: number): number => {
    let start: number = Math.min(...sweetness);
    let end: number = 0;
    
    for (let s of sweetness) {
        end += s;
    }
    
    while (start + 1 < end) {
        const mid: number = start + ((end - start) >> 1); // 猜一个甜度，
        
        if (_canDivide(sweetness, mid) >= K + 1) { // 看能不能划分出（k+1）份
            start = mid;
        } else {
            end = mid;
        }
    }

    return _canDivide(sweetness, end) >= K + 1 ? _findMin(sweetness, end) : _findMin(sweetness, start);
    
    function _canDivide(arr: number[], minS: number): number {
        let counter: number = 0;
        
        let sum: number = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            
            if (sum >= minS) {
                sum = 0;
                counter++;
            }
        }
        
        return counter;
    }
    
    function _findMin(arr: number[], minS: number): number {
        let minRes: number = Number.MAX_SAFE_INTEGER;
        
        let sum: number = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            
            if (sum >= minS) {
                minRes = Math.min(minRes, sum);
                sum = 0;
            }
        }

        return minRes;
    }
};