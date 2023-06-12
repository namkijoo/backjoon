import sys
input = sys.stdin.readline
cnt=0

N = int(input())
for i in range (N):
    stack=[]
    a= list(input().rstrip())
    for i in a :
        if stack :
            if i==stack[-1]:
                stack.pop()
            else :
                stack.append(i)
        else:
            stack.append(i)
    if not stack:
        cnt+=1
print(cnt)

