function solution(numbers, target) {
    const queue = [];
    let answer = 0;
    
    // 초기값 설정: (인덱스, 합계)
    queue.push([0, 0]);

    while (queue.length > 0) {
        const [l, sum] = queue.pop();

        // 모든 numbers 배열의 요소를 처리했을 때
        if (l === numbers.length) {
            if (sum === target) {
                answer++;
            }
        } 
        // 그렇지 않다면, 현재 요소의 값을 더하거나 빼서 새로운 합계를 구하고 큐에 추가
        else {
            queue.push([l + 1, sum + numbers[l]]);
            queue.push([l + 1, sum - numbers[l]]);
        }
    }

    return answer;
}