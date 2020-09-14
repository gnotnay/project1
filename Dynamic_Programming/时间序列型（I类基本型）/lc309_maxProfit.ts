export const maxProfit = (prices: number[]): number => {
    let f = new Array(prices.length + 1).fill([]).map(() => new Array(3).fill(0));

    f[0][0] = Number.MIN_SAFE_INTEGER;
    f[0][1] = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= prices.length; i++) {
        f[i][0] = f[i-1][1] + prices[i-1]; // 昨天持有 + 卖出价
        f[i][1] = Math.max(f[i-1][1], f[i-1][2] - prices[i-1]); // 继续持有 ｜｜ 昨天无交易行为但今天买入
        f[i][2] = Math.max(f[i-1][2], f[i-1][0]); //  继续无交易行为 ｜｜ 昨天买入
    }
    return Math.max(...f[prices.length]);
};