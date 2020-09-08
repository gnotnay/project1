export const isMatch = (s: string, p: string): boolean => {
    let m: number = s.length;
    let n: number = p.length;

    s = "#" + s;
    p = "#" + p;

    let f = new Array(m+1).fill([]).map(() => new Array(n+1).fill(false));
    f[0][0] = true;
    //f[0][j]
    // ""
    // "X*X*X*X*"
    for (let j = 2; j <= n; j++) {
        f[0][j] = (p[j] === "*") && f[0][j-2];
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            /** 分情况讨论
             *  1. 都为字符，看是否相等
             *  2. p[j] === "." 任意字符都为true，看f[i-1][j-1]
             *  3. p[j] === "*"。情况复杂
             *      3.1 当把*作为0时，消除之前的一个字符，看f[i][j-2]
             *      3.2 看f[i-1][j] && (p[j-1] === "." || p[j-1] === s[i])
             */
            if (_isLetter(p[j])) {
                f[i][j] = f[i-1][j-1] && (s[i] === p[j]); // f[0][0] f[0][j] f[i][0]
            } else if (p[j] === ".") {
                f[i][j] = f[i-1][j-1];
            } else {
                let zero = f[i][j-2]; // f[0][-1]
                let more = f[i-1][j] && (p[j-1] === "." || p[j-1] === s[i]); // f[0][j]
                f[i][j] = zero || more;
            }
        }
    }

    return f[m][n];
    
    function _isLetter(c: string): boolean {
        return c.toUpperCase() !== c.toLowerCase();
    }
}