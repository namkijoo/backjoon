a = []
tmp =0
first =0
second =0
for i in range (9):
    b = list(map(int,input().split()))
    a.append(b)
for i in range (9):
    for j in range (9):
             if(a[i][j]>tmp) : 
                 tmp=a[i][j]
                 first = i
                 second = j
print(tmp)
print(first+1,"",second+1)
             