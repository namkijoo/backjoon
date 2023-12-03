def solution(n, lost, reserve):
    sum=0
    lost.sort()
    reserve.sort()
    for i in reserve[:]:
        if i in lost:
            reserve.remove(i)
            lost.remove(i)
    
    for j in reserve:
        for i in lost:
            if i-j==1 or j-i==1:
                lost.remove(i)
                break
    
    
    answer = n-len(lost)
    return answer