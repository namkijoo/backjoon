        
function solution(arr1, arr2) {
    const r1=arr1.length;
    const c1=arr1[0].length;
    
    const r2=arr2.length;
    const c2=arr2[0].length
    
    const result=[]
    for(let i=0; i<r1; i++){
        result.push(new Array(c2).fill(0))
    }
    
    for (let j=0; j<r1; j++){
        for(let k=0; k<c2; k++){
            for(let l=0;l<c1; l++){
                result[j][k]+=arr1[j][l]*arr2[l][k]
            }
        }
    }
    return result;
} 