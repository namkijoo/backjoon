from collections import deque
import sys
queue = deque()
result=[]

n,k=map(int,sys.stdin.readline().split())
for i in range (n):
    queue.append(i+1)
while queue :
    for i in range (k-1):
        queue.append(queue.popleft())
    result.append(queue.popleft())
    
print("<", end='')
print(', '.join(map(str,result)), end='')
print(">")