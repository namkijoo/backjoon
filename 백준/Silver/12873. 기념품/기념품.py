import sys 
input = sys.stdin.readline

from collections import deque
N= int(input())
queue = deque([i+1 for i in range (N)])
n=1
while True :
    if(len(queue)==1):
        break
    num = n**3%len(queue)-1
    queue.rotate(-num)
    queue.popleft()
    n+=1
print(queue[0])
