export const maxUncrossedLines = (A: number[], B: number[]): number => {
    let m: number = A.length;
    let n: number = B.length;
    
    let f: number[][] = new Array(m+1).fill([]).map(() => new Array(n+1).fill(0));
    A.unshift(0);
    B.unshift(0);

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i] === B[j]) {
                f[i][j] = f[i-1][j-1] + 1;
            } else {
                f[i][j] = Math.max(f[i-1][j], f[i][j-1]);
            }
        }
    }
    
    return f[m][n];
};