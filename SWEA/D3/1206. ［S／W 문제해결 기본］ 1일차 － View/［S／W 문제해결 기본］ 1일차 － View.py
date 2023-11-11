for tc in range (1,11):
    N=int(input())
    num_list=list(map(int,input().split()))
    result=0
    for i in range (2,N-2):
        arMax = max(num_list[i-1],num_list[i-2],num_list[i+1],num_list[i+2])
        if arMax<num_list[i]:
            result+=(num_list[i]-arMax)
    print("#{} {}".format(tc,result))
    
    
            