class UnionFind {
    constructor(n) {
        this.father = new Array(n + 1);
        for (let i = 0; i <= n; i++) {
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
            return true;
        }
        
        this.father[rootA] = rootB;
    
        return false;
    }
}
var findRedundantConnection = function(edges) {
    let uf = new UnionFind(edges.length);

    for (let edge of edges) {
        if (uf.union(edge[0], edge[1])) {
            return edge;
        }
    }
};