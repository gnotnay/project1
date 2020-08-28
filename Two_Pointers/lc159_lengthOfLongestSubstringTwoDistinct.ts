export const lengthOfLongestSubstringTwoDistinct = function(s: string): number {
    let left: number = 0, right: number = 0;
    let freq: number[] = new Array(256).fill(0);
    let counter: number = 0;
    let ret: number = 0;
    
    while (right < s.length) {
        if (freq[s[right].charCodeAt(0)] === 0) {
            counter++;
        }
        freq[s[right].charCodeAt(0)]++;
        
        while (counter > 2) {
            freq[s[left].charCodeAt(0)]--;
            if (freq[s[left].charCodeAt(0)] === 0) {
                counter--;
            }
            left++;
        }
        
        if (counter <= 2) {
            ret = Math.max(ret, right - left + 1);
        }
        
        right++;
    }
    
    return ret;    
};