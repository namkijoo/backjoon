from collections import deque
import sys
q = deque()
result=[]

n,k,m=map(int,sys.stdin.readline().split())
for i in range (n):
    q.append(i+1)
i=0
while q :
    for _ in range(k-1):
            q.append(q.popleft())
    i += 1
    print(q.popleft())
    if i==m :
        q.reverse()
        i=0
    

