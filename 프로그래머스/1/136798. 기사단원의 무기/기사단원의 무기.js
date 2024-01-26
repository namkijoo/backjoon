function solution(number, limit, power) {
    var result = 0;
    
    // 약수 개수를 저장하는 배열
    var divisors = new Array(number + 1).fill(0);

    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            // i의 배수에 대해 약수 개수를 증가
            divisors[j]++;
        }

        if (divisors[i] > limit) {
            result += power;
        } else {
            result += divisors[i];
        }
    }

    return result;
}
