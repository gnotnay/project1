import { isNil } from "lodash";

export const canAttendMeetings = (intervals: number[][]): boolean => {
    if (isNil(intervals) || intervals.length === 0) return true;
    
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    
    let end: number = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) return false;
        
        end = intervals[i][1];
    }
    
    return true;
};