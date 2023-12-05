function solution(arr, n) {
    var answer = [];
    
    if(arr.length%2==0){
        for(var j=1; j<arr.length; j+=2){
            arr[j]+=n
        }
    }
    if(arr.length%2==1){
        
        for(var i=0; i<arr.length; i+=2){
            arr[i]+=n
        }
    }
    return arr;
}