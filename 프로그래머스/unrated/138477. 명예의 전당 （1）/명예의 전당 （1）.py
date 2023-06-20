from collections import deque
def solution(k, score):
    result=[]
    tmp=deque()
    for i in range (len(score)):
        if(len(tmp)<k):
            tmp.append(score[i])
        else:
            for j in range (len(tmp)):
                if score[i]<=tmp[0]:
                    tmp.append(tmp.popleft())
                else:
                    if(min(tmp)==tmp[0]):
                        tmp.popleft()
                        tmp.append(score[i])
                        break
                    else:
                        tmp.append(tmp.popleft())
        result.append(min(tmp))
    
    return result