T=int(input())

for tc in range (1,T+1):
    eleven=11*24*60+11*60+11
    a,b,c=map(int,input().split())
    result=a*24*60+b*60+c
    if result-eleven<0:
        print(f'#{tc} -1')
    else:
        print(f'#{tc} {result-eleven}')

    