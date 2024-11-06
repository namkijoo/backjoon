function solution(n, computers) {
    let visited = Array(n).fill(false);
    let answer = 0;
    
    function bfs(start) {
        let queue = [start];
        visited[start] = true;

        while (queue.length > 0) {
            let current = queue.shift();
            for (let i = 0; i < computers[current].length; i++) {
                if (computers[current][i] === 1 && !visited[i]) {
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs(i);
            answer += 1;
        }
    }
    
    return answer;
}
