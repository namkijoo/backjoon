T=int(input())
for tc in range (1,T+1):
    n,k=map(int,input().split())
    list=[]
    scores=['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D0']
    for i in range (n):
        a,b,c=map(int,input().split())
        score = a*0.35+b*0.45+c*0.2
        list.append(score)
    k_num=list[k-1]
    list.sort(reverse=True)
    l=n//10
    x=list.index(k_num)//l
    print("#{} {}".format(tc,scores[x]))