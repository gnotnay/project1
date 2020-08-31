class UnionFind {
    constructor(size) {
        this.father = [];
        this.size = new Array(size + 1).fill(1);
        
        for (let i = 0; i <= size; i++) {
            this.father[i] = i;
        }
    }
    
    find(x) {
        if (this.father[x] === x) {
            return x;
        }
        
        return this.father[x] = this.find(this.father[x]);
    }
    
    union(a, b) {
        let rootA = this.find(a);
        let rootB = this.find(b);
        
        if (rootA === rootB) {
            return rootA;
        } else {
            if (this.size[rootA] > this.size[rootB]) {
                let temp = rootA;
                rootA = rootB;
                rootB = temp;
            }
        }
        
        this.father[rootA] = rootB;
        this.size[rootB] += this.size[rootA];
        
        return rootB;
    }
}

var largestComponentSize = function(A) {
    let max = Math.max(...A);
    let uf = new UnionFind(max);
    let primes = _getPrimes(max);
    
    for (let a of A) {
        for (let p of primes) {
            if (a % p === 0) {
                uf.union(a, p);
            }
            if (a < p) break;
        }
    }
    
    let ret = 0;
    let map = new Map();
    
    for (let a of A) {
        let root = uf.find(a);
        
        if (map.has(root)) {
            map.set(root, map.get(root) + 1);
        } else {
            map.set(root, 1);
        }
        ret = Math.max(ret, map.get(root));
    }
    
    return ret;
    
    function _getPrimes(max) {
        let primes = [];
        let isPrime = new Array(max).fill(true);
        for (let i = 2; i <= max; i++) {
            if (isPrime[i]) {
                primes.push(i);
                
                for (let j = i * i; j <= max; j += i) {
                    if (isPrime[j])
                    isPrime[j] = false;
                }
            }
        }
        
        return primes;
    }
};