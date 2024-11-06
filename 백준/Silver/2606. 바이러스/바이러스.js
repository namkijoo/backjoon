const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const length = Number(input[0]);
const lengthNum = Number(input[1]);

// 그래프를 인접 리스트 형태로 초기화
const graph = Array.from({ length: length + 1 }, () => []);
for (let i = 2; i < lengthNum + 2; i++) {
    const [n, m] = input[i].split(" ").map(Number);
    graph[n].push(m);
    graph[m].push(n);
}

const visited = Array(length + 1).fill(false);
let result = 0;

function bfs(start) {
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
        const node = queue.shift();

        for (const next of graph[node]) {
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
                result += 1;
            }
        }
    }
}

// 1번 컴퓨터부터 시작
bfs(1);

console.log(result);
