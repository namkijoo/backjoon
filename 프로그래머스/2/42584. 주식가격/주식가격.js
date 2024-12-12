function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = []; 

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const topIndex = stack.pop();
            answer[topIndex] = i - topIndex; 
        }
        stack.push(i); 
    }

    while (stack.length > 0) {
        const topIndex = stack.pop();
        answer[topIndex] = prices.length - 1 - topIndex;
    }

    return answer;
}
