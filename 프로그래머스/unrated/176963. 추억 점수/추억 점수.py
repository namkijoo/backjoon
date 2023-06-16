def solution(name, yearning, photo):
    info=dict(zip(name,yearning))
    result=[]
    for i in range (len(photo)):
        score=0
        for j in range (len(photo[i])):
            score+=info.get(photo[i][j],0)
        result.append(score)
    return result