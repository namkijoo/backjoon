def solution(n):
    tf=False
    for i in range (n+1):
        if i**2==n:
            result=i
            tf=True
            break
    if not tf :
        return -1
    return((result+1)**2)
