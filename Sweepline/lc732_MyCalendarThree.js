var MyCalendarThree = function() {
    this.sp = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    this.sp.push([start, 1]);
    this.sp.push([end, -1]);
    
    this.sp.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    
    let max = 0;
    let counter = 0;
    
    for (let s of this.sp) {
        counter += s[1];
        
        max = Math.max(max, counter);
    }
    
    return max;
};
