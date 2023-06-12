import sys
input= sys.stdin.readline
N=int(input())
stack=[]
cnt=[]
count=1
Yn=True
for i in range (N):
    a = int(input())
    while(count<=a):
        stack.append(count)
        count+=1
        cnt.append("+")
    if(stack[-1]==a):
        stack.pop()
        cnt.append("-")
    else:
        Yn=False
        break
        
if(Yn):
    print(*cnt)
else:
    print("NO")