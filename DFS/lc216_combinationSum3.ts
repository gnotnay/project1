export const combinationSum3 = (k: number, n: number): number[][] => {
    let tempRet: number[] = [], ret: number[][] = [];

    const _dfs = (n: number, k: number, index: number, tempRet: number[], ret: number[][]) => {
        if (k === 0 && n === 0) {
            ret.push(Array.from(tempRet));
        }
        
        if (n < 0) return;
        if (k < 0) return;
    
        for (let i = index; i <= 9; i++) {
            tempRet.push(i);
            _dfs(n - i, k - 1, i + 1, tempRet, ret);
            tempRet.pop();
        }
    }

    _dfs(n, k, 1, tempRet, ret);
    
    return ret;
};

