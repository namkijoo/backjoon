const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const list = input.slice(1).map(line => line.split("").map(Number));  

const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];  
const visited = Array.from({ length: n }, () => Array(n).fill(false));  
const result = [];


function bfs(x, y) {
    let count = 1;  
    visited[x][y] = true;
    const queue = [[x, y]];

    while (queue.length > 0) {
        const [currentX, currentY] = queue.shift();
        
        for (const [dx, dy] of dirs) {
            const nx = currentX + dx;
            const ny = currentY + dy;

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && list[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                count += 1;
            }
        }
    }

    return count;
}


// 단지 찾기
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (list[i][j] === 1 && !visited[i][j]) {  
            const housesInComplex = bfs(i, j);
            result.push(housesInComplex);
        }
    }
}

result.sort((a, b) => a - b);  

console.log(result.length);  
console.log(result.join("\n"));  
