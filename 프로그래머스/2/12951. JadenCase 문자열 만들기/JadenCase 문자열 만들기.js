function solution(s) {
    s = s.toLowerCase()
    var answer = s.split(" ").map(s => {
        let arr = s.split("")
        if(arr[0] != null)
           arr[0] = arr[0].toUpperCase();
        return arr.join('');
    }).join(' ');

    return answer;
}
출처: https://jo-c.tistory.com/40 [조씨의 개발 블로그:티스토리]