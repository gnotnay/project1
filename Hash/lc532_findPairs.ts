export const findPairs = (nums: number[], k: number): number => {
    let ret: number = 0;
    let map: Map<number, number> = new Map();
    
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num)! + 1);
        } else {
            map.set(num, 1);
        }
    }
    
    map.forEach((value, key) => {
        if (k > 0 && map.has(key + k)) {
            ret++;
        } else if (k === 0  && value > 1) {
            ret++;
        }
    });
    
    return ret;
};