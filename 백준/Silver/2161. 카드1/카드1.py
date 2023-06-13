from collections import deque
import sys

input = sys.stdin.readline
queue=deque()
result=[]

N=int(input())
for i in range (N):
    queue.append(i+1)
while(len(queue)>1):
    result.append(queue.popleft())
    queue.append(queue.popleft())
for i in result:
    print(i, end = ' ')
print(queue[0])