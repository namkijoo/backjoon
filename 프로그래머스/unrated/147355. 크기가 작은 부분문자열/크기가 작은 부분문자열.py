def solution(t, p):
    a1=len(t)
    a2=len(p)
    leng=a1-(a2-1)
    cnt=0
    a=0
    for i in range (leng):
        if int(t[a:a+a2]) <= int(p) :
            print(t[a:a+a2])
            cnt+=1
            print("d")
        a+=1

    return cnt
