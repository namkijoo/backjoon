from collections import deque
import sys
queue=deque()
N=int(sys.stdin.readline())
for i in range (N):
    queue.append(i+1)
while(len(queue)>1):
    queue.popleft()
    queue.append(queue.popleft())
print(queue[0])