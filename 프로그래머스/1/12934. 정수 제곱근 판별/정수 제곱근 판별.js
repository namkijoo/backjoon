function solution(n) {
    var answer = 0;
    console.log(Math.sqrt(n))
    if(Math.sqrt(n)%1==0){
        return (Math.sqrt(n)+1)**2
    }
    else{
        return -1
    }
}