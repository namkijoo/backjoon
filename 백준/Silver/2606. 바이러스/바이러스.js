const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const length = Number(input[0]);
const lengthNum = Number(input[1]);

// 그래프 생성
const graph = Array.from({ length: length + 1 }, () => []);
for (let i = 2; i < lengthNum + 2; i++) {
    const [n, m] = input[i].split(" ").map(Number);
    graph[n].push(m);
    graph[m].push(n);
}

const visited = Array(length + 1).fill(false);
let result = 0;

// DFS 탐색 함수
function dfs(node) {
    visited[node] = true; 
    for (const next of graph[node]) {
        if (!visited[next]) {
            result++;  
            dfs(next);  
        }
    }
}

visited[1] = true;  
dfs(1);

console.log(result);
