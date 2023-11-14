T=int(input())
for tc in range (1,T+1):
    N=int(input())
    words=""
    for i in range (N):
        word,num=input().split()
        words+=word*int(num)
    print("#"+str(tc))
    sum=0
    for j in words:
        print(j,end="")
        sum+=1
        if sum%10==0:
            print("")
    print("")