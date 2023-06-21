from collections import deque
def solution(arr):
    arr=deque(arr)
    result=[]
    for i in range (len(arr)+1):
        if(len(arr)>1):
            if arr[0]==arr[1]:
                arr.popleft()
            else:
                result.append(arr.popleft())
        elif(len(arr)==1):
            result.append(arr[0])
            break
    return(result)