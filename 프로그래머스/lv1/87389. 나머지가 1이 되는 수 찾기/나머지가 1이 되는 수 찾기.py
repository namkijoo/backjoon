def solution(n):
    result=[]
    for i in range (n):
        if n%(i+1)==1:
            result.append(i+1)
    return(min(result))
