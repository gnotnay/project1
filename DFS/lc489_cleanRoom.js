var cleanRoom = function(robot) {
    const dx = [0, 1, 0, -1]; // clockwise
    const dy = [-1, 0, 1, 0];
    let set = new Set(); // unknown size -> isVisited[][] is impossible
    
    _dfs(0, 0, 0);
    
    function _dfs(x, y, dir) {
        robot.clean();
        set.add(`${x}#${y}`);
        
        for (let i = 0; i < 4; i++) {
            let nextDir = (dir + i) % 4;
            let nextX = x + dx[nextDir];
            let nextY = y + dy[nextDir];
            
            if (!set.has(`${nextX}#${nextY}`) && robot.move()) {
                _dfs(nextX, nextY, nextDir);
                robot.turnLeft();
                robot.turnLeft();
                robot.move(); // 倒车
                robot.turnLeft();
                robot.turnLeft();
            }
            robot.turnRight(); 
        }
    }
};