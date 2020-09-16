export const minFallingPathSum = (A: number[][]): number => {
    let f: number[][] = new Array(A.length).fill([]).map(() => new Array(A[0].length).fill(200));
    
    for (let j = 0; j < A[0].length; j++) {
        f[0][j] = A[0][j]
    }
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (i === 0) {
                f[i][j] = A[0][j];
                continue;
            }
            
            f[i][j] = f[i-1][j];
            
            if (j + 1 < A[0].length) {
                f[i][j] = Math.min(f[i][j], f[i-1][j+1]);
            }
            if (j - 1 >= 0) {
                f[i][j] = Math.min(f[i][j], f[i-1][j-1]);
            }

            f[i][j] += A[i][j];
        }
    }

    return Math.min(...f[A.length-1]);
};