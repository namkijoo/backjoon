N, K = map(int, input().split()) 
coin_lst = list()
for i in range(N):
    coin_lst.append(int(input()))
coin_lst.reverse()
count = 0
for i in (range(N)):
    count += K//coin_lst[i] 
    K = K%coin_lst[i] 

print(count)