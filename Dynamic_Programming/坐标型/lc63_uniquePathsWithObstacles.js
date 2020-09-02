var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    if (m === 0) return 0
    let n = obstacleGrid[0].length;
    if (n === 0) return 0;
    
    let f = new Array(m).fill([]).map(() => new Array(n).fill(0));
    f[0][0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                f[i][j] = 0;
                continue;
            }
            
            if (i > 0) {
                f[i][j] += f[i - 1][j];
            }
            
            if (j > 0) {
                f[i][j] += f[i][j - 1];
            }
        }
    }
    
    return f[m - 1][n - 1];
};