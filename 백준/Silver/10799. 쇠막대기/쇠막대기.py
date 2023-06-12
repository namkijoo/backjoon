import sys
input = sys.stdin.readline
a = list(input().rstrip())
cnt=0
stack=[]
for i in range (len(a)):
    if a[i]=='(':
        stack.append('(')
    else :
        if a[i-1]=='(':
            stack.pop()
            cnt+=len(stack)
        else :
            stack.pop(-1)
            cnt+=1
print(cnt)
