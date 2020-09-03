var minCost = function(costs) {
    if (costs === null || costs.length === 0) {
        return 0;
    }
    let f = new Array(costs.length).fill([]).map(() => new Array(3).fill(0));

    f[0][0] = costs[0][0];
    f[0][1] = costs[0][1];
    f[0][2] = costs[0][2];
    
    for (let i = 1; i < costs.length; i++) {
        f[i][0] = Math.min(f[i-1][1] + costs[i][0], f[i-1][2] + costs[i][0]);
        f[i][1] = Math.min(f[i-1][0] + costs[i][1], f[i-1][2] + costs[i][1]);
        f[i][2] = Math.min(f[i-1][0] + costs[i][2], f[i-1][1] + costs[i][2]);
    }
    let n = costs.length - 1;
    return Math.min(f[n][0], f[n][1], f[n][2]);
};