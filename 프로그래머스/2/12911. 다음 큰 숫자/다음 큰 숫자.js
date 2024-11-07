function solution(n) {
    function calOne(num) {
        return num.toString(2).split('1').length - 1;
    }

    let nOne = calOne(n);
    let next = n + 1;

    while (calOne(next) !== nOne) {
        next++;
    }

    return next;
}
