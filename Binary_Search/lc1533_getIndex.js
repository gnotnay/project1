var getIndex = function(reader) {
    let start = 0, end = reader.length() - 1;
    
    while (start + 1 < end) {
        const mid = start + ((end - start) >> 1);
        let ret = 0;
        if ((end - start) % 2 === 0) { // odd number of elements
            ret = reader.compareSub(start, mid, mid, end);
        } else {
            ret = reader.compareSub(start, mid, mid + 1, end); // even number of elements
        }
        
        if (ret === 1) {
            end = mid;
        } else if (ret === -1) {
            start = mid;
        } else {
            return mid;
        }
    }
    
    if (reader.compareSub(start, start, end, end) === 1) {
        return start;
    }
    
    return end;
};