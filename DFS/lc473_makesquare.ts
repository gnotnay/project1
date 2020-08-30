export const makesquare = (nums: number[]): boolean => {
    if (nums.length === 0) return false;
    let sum: number = 0;
    for (let num of nums) {
        sum += num;
    }
    if (sum % 4 !== 0) return false;
    
    nums.sort((a, b) => b - a);
    
    let length: number = sum / 4; // edge length
    let isVisited: boolean[] = new Array(nums.length).fill(false);
    
    return _dfs(nums, length, 0, 0, 0, isVisited);
    
    function _dfs(nums: number[], length: number, currIndex: number, currLength: number, numOfEdge: number, isVisited: boolean[]): boolean {
        if (numOfEdge === 4) return true;
        if (currLength === length) return _dfs(nums, length, 0, 0, numOfEdge + 1, isVisited);
        if (currLength > length) return false;
        if (currIndex === nums.length) return false;
        
        for (let i = currIndex; i < nums.length; i++) {
            if (isVisited[i]) continue;
            
            isVisited[i] = true;
            if (_dfs(nums, length, i + 1, currLength + nums[i], numOfEdge, isVisited)) {
                return true;
            }
            isVisited[i] = false;
        }
        
        return false;
    }
};