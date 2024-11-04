function solution(priorities, location) {
    const queue = priorities.map((value, index) => [value, index]);
    let printOrder = 0; 
    let sortedPriorities = [...priorities].sort((a, b) => b - a); 

    while (queue.length > 0) {
        const [currentPriority, currentIndex] = queue.shift(); 
        
        if (currentPriority === sortedPriorities[printOrder]) {
            printOrder++; 
            if (currentIndex === location) {
                return printOrder; 
            }
        } else {
            queue.push([currentPriority, currentIndex]);
        }
    }

    return -1; // 만약 도달하지 못한 경우
}
