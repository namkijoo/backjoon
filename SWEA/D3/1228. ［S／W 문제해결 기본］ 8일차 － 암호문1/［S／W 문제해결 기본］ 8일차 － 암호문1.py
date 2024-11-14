T = 10

for tc in range (1, T+1) :
    N = int(input())
    numList = list(map(int, input().split()))
    
    insertNum = int(input())
    insertNumList = input().split("I")

    for i in insertNumList : 
        command_list = list(map(int,i.split()))
        if len(command_list) == 0:
            continue
        for j in range(command_list[1]):
            numList.insert(command_list[0] + j, command_list[j + 2]) 
        
    result = numList[:10]
    print("#{} {}".format(tc, " ".join(map(str,result))))
    
    