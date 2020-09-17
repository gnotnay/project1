class TrieNode {
    constructor() {
        this.children = new Array(2);
    }
}
var findMaximumXOR = function(nums) {
    let ret = 0;
    let root = new TrieNode();
    for (let num of nums) {
        insert(root, num);
    }

    for (let num of nums) {
        ret = Math.max(ret, search(root, num));
    }
    
    return ret;
};

const insert = (root, num) => {
    let t = root;
    
    for (let i = 30; i >= 0; i--) {
        let bit = (num >> i) & 1;
        
        if (t.children[bit] === undefined) {
            t.children[bit] = new TrieNode();
        }
        
        t = t.children[bit];
    }
}

const search = (root, num) => {
    let t = root;
    let ret = 0;
    for (let i = 30; i >= 0; i--) {
        let bit = (num >> i) & 1;

        if (t.children[1 - bit] !== undefined) {
            ret += (1 << i);
            t = t.children[1 - bit];
        } else {
            t = t.children[bit];
        }        
    }
    
    return ret;
}