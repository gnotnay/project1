var maxKilledEnemies = function(grid) {
    const m = grid.length;
    if (m === 0) return 0;
        
    const n = grid[0].length;
    if (n === 0) return 0;
    
    let up = new Array(m).fill([]).map(() => new Array(n).fill(0));
    let down = new Array(m).fill([]).map(() => new Array(n).fill(0));
    let left = new Array(m).fill([]).map(() => new Array(n).fill(0));
    let right = new Array(m).fill([]).map(() => new Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "W") {
                up[i][j] = 0;
                continue;
            }
            /**
             * 技巧在于提前给每个点设置了正确的初始值，不用考虑第一排/列，最后一排/列的边界条件
             */
            if (grid[i][j] === "E") {
                up[i][j] = 1;
            }
            if (i > 0) {
                up[i][j] += up[i-1][j];
            }  
        }
    }
    
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "W") {
                down[i][j] = 0;
                continue;
            }
            
            if (grid[i][j] === "E") {
                down[i][j] = 1;
            }
            if (i + 1 < m) {
                down[i][j] += down[i+1][j];
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "W") {
                left[i][j] = 0;
                continue;
            } 
            
            if (grid[i][j] === "E") {
                left[i][j] = 1;
            }
            if (j > 0) {
                left[i][j] += left[i][j-1];
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = n - 1; j >= 0; j--) {
            if (grid[i][j] === "W") {
                right[i][j] = 0;
                continue;
            }
            
            if (grid[i][j] === "E") {
                right[i][j] = 1;
            }
            if (j + 1 < n) {
                right[i][j] += right[i][j+1];
            }
        }
    }

    let ret = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "0")
                ret = Math.max(ret, up[i][j]+down[i][j]+right[i][j]+left[i][j]);
        }
    }
    
    return ret;
};