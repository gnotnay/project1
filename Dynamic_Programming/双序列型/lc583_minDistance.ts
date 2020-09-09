export const minDistance = (word1: string, word2: string): number => {
    let m: number = word1.length;
    let n: number = word2.length;

    let f: number[][] = new Array(m + 1).fill([]).map(() => new Array(n + 1).fill(501));
    word1 = "#" + word1;
    word2 = "#" + word2;
    
    for (let i = 0; i <= m; i++) {
        f[i][0] = i;
    }
    
    for (let j = 0; j <= n; j++) {
        f[0][j] = j;
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i] !== word2[j]) {
                f[i][j] = Math.min(f[i][j], f[i-1][j], f[i][j-1]) + 1;
            } else {
                f[i][j] = f[i-1][j-1];
            }
        } 
    }
    
    return f[m][n]
};