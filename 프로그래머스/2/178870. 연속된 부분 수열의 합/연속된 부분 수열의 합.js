function solution(sequence, k) {
    let result = [];
    let sum = 0;
    let left = 0;

    for (let right = 0; right < sequence.length; right++) {
        sum += sequence[right]; 

        while (sum > k) {
            sum -= sequence[left];
            left++;
        }

        if (sum === k) {
            result.push([left, right]);
        }
    }

    return result.sort((a, b) => {
        const rangeA = a[1] - a[0];
        const rangeB = b[1] - b[0];
        return rangeA - rangeB; 
    })[0];
}
