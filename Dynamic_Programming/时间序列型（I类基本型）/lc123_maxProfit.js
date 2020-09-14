var maxProfit = function(prices) {
    // let f = new Array(prices.length + 1).fill([]).map(() => new Array(4).fill(0));
    // f[0][0] = Number.MIN_SAFE_INTEGER;
    // f[0][2] = Number.MIN_SAFE_INTEGER;
    // for (let i = 1; i <= prices.length; i++) {
    //     // 从盈利角度考虑
    //     f[i][0] = Math.max(f[i-1][0], -prices[i-1]);
    //     f[i][1] = Math.max(f[i-1][1], f[i-1][0] + prices[i-1]);
    //     f[i][2] = Math.max(f[i-1][2], f[i-1][1] - prices[i-1]);
    //     f[i][3] = Math.max(f[i-1][3], f[i-1][2] + prices[i-1]);
    // }

    // return Math.max(...f[prices.length]);

    let buy1 = Number.MAX_SAFE_INTEGER, buy2 = Number.MAX_SAFE_INTEGER;
    let sell1 = 0, sell2 = 0;

    for (let i = 0; i < prices.length; i++) {
        //只取决于前一天状态
        buy1 = Math.min(buy1, prices[i]);
        sell1 = Math.max(sell1, prices[i] - buy1);
        buy2 = Math.min(buy2, prices[i] - sell1);
        sell2 = Math.max(sell2, prices[i] - buy2);
    }

    return sell2;
};