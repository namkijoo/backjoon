import sys
input = sys.stdin.readline

from collections import deque

queue = deque()
N = int(input())
while True:
    num = int(input())
    if num == -1:
        break
    elif num > 0:
        queue.append(num)
    elif len(queue) < N:
        queue.popleft()
if(queue) :
    print(*queue)
else: 
    print("empty")