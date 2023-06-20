def solution(k, m, score):
    score.sort()
    cnt=0
    while len(score) >= m:
        result=[]
        for i in range (m):
            result.append(score.pop())
        cnt+=(min(result)*m)
        if len(score)<m:
            break
    return cnt