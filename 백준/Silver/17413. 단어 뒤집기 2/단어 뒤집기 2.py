import sys
input = sys.stdin.readline
ans = ""
stack = ""
tag =False
a=input().rstrip()
for i in (a):
    if(i=="<"):
        tag = True
        ans+=stack[::-1]
        stack=""
        ans+=i
        continue
    elif(i==">"):
        tag =False
        ans+=i
        continue
    elif(i==" "):
        ans+=stack[::-1]+" "
        stack=""
        continue
    if tag :
        ans+=i
    else:
        stack+=i
print(ans+stack[::-1])
