import sys
input=sys.stdin.readline
N=int(input())
l=[]
for i in str(N):
    l.append(int(i))

l.sort(reverse=True)

for i in l:
    print(i,end='')