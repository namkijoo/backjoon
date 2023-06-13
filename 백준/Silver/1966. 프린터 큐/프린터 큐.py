from collections import deque
import sys


N=int(sys.stdin.readline())

for i in range (N):
    cnt=0
    queue1=deque()
    queue2=deque()
    a,b = map(int,sys.stdin.readline().split())
    c = list(map(int, sys.stdin.readline().split())) 
    for i in range (a):
        queue1.append(c[i])
        queue2.append(i)
    
    while queue1:
        confirm=False
        for j in range (len(queue1)):
            if queue1[0]<queue1[j]:
                confirm=True
        
        if confirm :
            queue1.append(queue1.popleft())
            queue2.append(queue2.popleft())
        else :
            if queue2[0]==b :
                cnt+=1
                break
            else :
                queue1.popleft()
                queue2.popleft()
                cnt+=1
    print(cnt)
        