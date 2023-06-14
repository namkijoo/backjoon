import sys
input=sys.stdin.readline
from collections import deque


N=int(input())
for i in range (N):
    q = deque()
    num = int(input())
    word = input().split()
    tmp=word[0]
    q.append(word[0])
    
    for j in range(1,len(word)) :
        if tmp>=word[j]:
            q.appendleft(word[j])
            tmp=word[j]
        else:
            q.append(word[j])
    print(''.join(q))