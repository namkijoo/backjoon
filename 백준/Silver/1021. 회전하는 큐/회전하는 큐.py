from collections import deque
import sys
n,m=map(int,sys.stdin.readline().rstrip().split())
data = deque([i+1 for i in range (n)])
index = list(map(int, sys.stdin.readline().rstrip().split()))

count=0

for num in index:
    while 1 :
        if(data[0]==num):
            data.popleft()
            break
        else:
            if(data.index(num)<=len(data)//2):
                data.rotate(-1)
                count+=1
            else :
                data.rotate(1)
                count+=1
print(count)