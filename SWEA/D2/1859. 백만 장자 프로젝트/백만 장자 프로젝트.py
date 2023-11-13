T = int(input())

for tc in range(1, T + 1):
    N = int(input())
    lists = list(map(int,input().split()))

    answer=0
    while lists:
        max_num = max(lists)
        index = lists.index(max_num)
        answer += (max_num*index)-sum(lists[:index])
        lists = lists[index+1:]

        if index == len(lists)-1:
            break
    print("#" + str(tc), answer)