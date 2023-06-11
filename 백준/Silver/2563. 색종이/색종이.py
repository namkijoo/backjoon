array = [[0 for i in range (101)] for i in range (101)]
N=int(input())
for i in range(N):
    x,y = map(int,input().split())
    for row in range (x,x+10):
        for col in range (y,y+10):
            array[row][col]=1
result =0
for i in array:
    result+=i.count(1)
print(result)