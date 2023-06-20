def solution(babbling):
    bubble=["aya","ye","woo","ma"]
    answer = 0
    for i in babbling:
        for j in bubble:
            if j*2 not in i:
                i=i.replace(j,' ')
                print("i =", i)
        if len(i.strip())==0:
            answer +=1
    return(answer)