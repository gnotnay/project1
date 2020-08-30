const rob = (root) => {
    let mapRob = new Map();
    let mapNoRob = new Map();
    
    // return _dfs(root, true) > _dfs(root, false) ? _dfs(root, true) : _dfs(root, false);
    return _dfs(root, true);
    
    function _dfs(node, canRob) {
        if (!node) return 0;
        
        if (canRob === true && mapRob.has(node)) {
            return mapRob.get(node);
        }
        if (canRob === false && mapNoRob.has(node)) {
            return mapNoRob.get(node);
        }
        
        let ret = 0;
        if (canRob === false) { // 绝对不能rob
            ret = _dfs(node.left, !canRob) + _dfs(node.right, !canRob);
        } else {// 可以rob，比较抢或者不抢谁的价值高
            ret = Math.max(node.val + _dfs(node.left, !canRob) + _dfs(node.right, !canRob), _dfs(node.left, canRob) + _dfs(node.right, canRob));
        }
        
        if (canRob === true) {
            mapRob.set(node, ret);
        } else {
            mapNoRob.set(node, ret);
        }
        
        return ret;
    }
};