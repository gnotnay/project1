export const insert = (intervals: number[][], newInterval: number[]): number[][] => {
    let sp: number[][] = new Array();
    intervals.push(newInterval);
    
    for (let i = 0; i < intervals.length; i++) {
        sp.push([intervals[i][0], 1]);
        sp.push([intervals[i][1], -1]);
    }
    
    sp.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]; // 先加再减，确保counter彻底归零
        }
        
        return a[0] - b[0];
    });
    
    let ret = [];
    let counter = 0;
    let start: number = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < sp.length; i++) {
        counter += sp[i][1];
        if (counter === 0 && start !== Number.MIN_SAFE_INTEGER) {
            ret.push([start, sp[i][0]]);
            start = Number.MIN_SAFE_INTEGER;
        } else if (counter === 1 && start === Number.MIN_SAFE_INTEGER) {
            start = sp[i][0];
        }
    }
    
    return ret;
};