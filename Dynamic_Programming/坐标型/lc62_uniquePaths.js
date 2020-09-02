var uniquePaths = function(m, n) {
    let f = new Array(m).fill([]).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                f[i][j] = 1;
            } else {
                f[i][j] = f[i - 1][j] + f[i][j - 1];
            }
        }
    }

    return f[m - 1][n - 1];
};