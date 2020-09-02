export const largestTimeFromDigits = (A: number[]): string => {
    A.sort((a, b) => a - b);

    let isVisited: boolean[] = new Array(A.length).fill(false);
    let tempRes: number[] = [];
    let res: number[][] = [];
    _dfs(A, isVisited, tempRes, res);

    let ret: string = "";
    for (let i = 0; i < res.length; i++) {
        const hour: number = res[i][0] * 10 + res[i][1];
        const minute: number = res[i][2] * 10 + res[i][3];

        if (hour >= 24 || minute >= 60) continue;

        ret = `${res[i][0]}${res[i][1]}:${res[i][2]}${res[i][3]}`;
    }

    return ret;

    function _dfs(A: number[], isVisited: boolean[], tempRes: number[], res: number[][]) {
        if (tempRes.length === A.length) {
            res.push([...tempRes]);
            return;
        }

        for (let i = 0; i < A.length; i++) {
            if (isVisited[i]) {
                continue;
            }

            if (i > 0 && A[i] === A[i - 1] && isVisited[i - 1]) {
                continue;
            }

            isVisited[i] = true;
            tempRes.push(A[i]);
            _dfs(A, isVisited, tempRes, res);
            tempRes.pop();
            isVisited[i] = false;
        }
    }
};