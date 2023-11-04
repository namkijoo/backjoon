T=int(input())
for tc in range (1,T+1):
    nums = list(map(int,input().split()))
    nums.remove(max(nums))
    nums.remove(min(nums))
    avg=sum(nums)/len(nums)
    print("#{} {}".format(tc, round(avg)))
