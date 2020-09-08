var maxNumEdgesToRemove = function(n, edges) {
    let edge1 = [];
    let edge2 = [];
    let edge3 = [];
    this.father = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        this.father[i] = i;
    }

    for (let edge of edges) {
        if (edge[0] === 3) edge3.push([edge[1], edge[2]]);
        else if (edge[0] === 1) edge1.push([edge[1], edge[2]]);
        else if (edge[0] === 2) edge2.push([edge[1], edge[2]]);
    }
    
    let count3 = 0;

    for (let edge of edge3) {
        let a = edge[0];
        let b = edge[1];
        
        if (find(a) !== find(b)) {
            union(a, b);
            count3++;
        }
    }
    let tempFather = [...this.father];

    let count1 = 0;
    for (let edge of edge1) {
        let rootA = find(edge[0]);
        let rootB = find(edge[1]);
        
        if (rootA !== rootB) {
            union(edge[0], edge[1]);
            count1++;
        }
    }

    if (count3 + count1 !== n - 1) return -1;
    
    this.father = [...tempFather];
    
    let count2 = 0;
    for (let edge of edge2) {
        let rootA = find(edge[0]);
        let rootB = find(edge[1]);
        
        if (rootA !== rootB) {
            union(edge[0], edge[1]);
            count2++;
        }
    }
    if (count3 + count2 !== n - 1) return -1;
    
    return edges.length - count3 - count2 - count1;
    
    function find(x) {
        if (this.father[x] === x) {
            return x;
        }
        
        return this.father[x] = find(this.father[x]);
    }
    
    function union(a, b) {
        let rootA = find(a);
        let rootB = find(b);
        
        if (rootA < rootB) {
            this.father[rootB] = rootA;
        } else {
            this.father[rootA] = rootB;
        }
    }
};