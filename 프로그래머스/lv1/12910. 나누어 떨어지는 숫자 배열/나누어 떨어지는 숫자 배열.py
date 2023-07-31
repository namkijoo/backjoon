def solution(arr, divisor):
    result = []
    cnt =0
    for i in arr:
        if i%divisor==0:
            result.append(i)
            cnt+=1
    if cnt==0:
        result.append(-1)
        return result
    else:
        result.sort()
        return result