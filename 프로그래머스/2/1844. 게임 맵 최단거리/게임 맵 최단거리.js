function solution(maps) {
    const n = maps.length; // 행
    const m = maps[0].length; // 열
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우

    const visited = Array.from({ length: n }, () => Array(m).fill(false)); // 방문 여부 배열
    const queue = [[0, 0, 1]]; // 행, 열, 이동거리
    visited[0][0] = true; // 시작 위치 방문 처리

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();

        // 적 팀 진영 도착 시 값 리턴
        if (row === n - 1 && col === m - 1) {
            return distance;
        }

        // 상하좌우 이동 여부 확인
        for (const [r, c] of dir) {
            const newRow = row + r;
            const newCol = col + c;

            // 새로운 위치가 맵 내에 있고 벽이 아닐 시 이동 가능
            if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m &&
                maps[newRow][newCol] === 1 && !visited[newRow][newCol]) {
                queue.push([newRow, newCol, distance + 1]);
                visited[newRow][newCol] = true; // 방문한 위치를 true로 표시
            }
        }
    }
    return -1;
}
