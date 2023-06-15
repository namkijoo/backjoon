import sys
input = sys.stdin.readline
from collections import deque
n = int(input().rstrip())

stack = [i for i in range(n,0,-1)]
ans = deque()
skills = list(map(int,input().rstrip().split()))
skills.reverse()
for skill in skills:
    if skill == 1:
        ans.append(stack.pop())
    elif skill == 2:
        tmp=ans.pop()
        ans.append(stack.pop())
        ans.append(tmp)
    elif skill == 3:
        ans.appendleft(stack.pop())
ans.reverse()
print(*ans)