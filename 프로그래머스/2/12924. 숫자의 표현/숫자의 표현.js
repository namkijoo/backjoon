function solution(n) {
    let result = 0;

    // i는 1부터 n까지 반복
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;

        // 연속된 자연수의 합을 구하는 내부 while문
        while (sum < n) {
            sum += num;
            num++;
        }

        // sum이 n과 같으면 result를 증가
        if (sum === n) {
            result++;
        }
    }

    return result;
}
