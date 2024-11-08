function solution(arr) {
    //최대공약수
    function gcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }

    //최대공배수
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    const answer = arr.reduce((acc, cur) => lcm(acc, cur));

    return answer;
}