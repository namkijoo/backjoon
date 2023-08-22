def solution(n):
    result=[]
    a=list(str(n))
    a.reverse()
    for i in a :
        result.append(int(i))
    return result