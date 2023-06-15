import sys
input = sys.stdin.readline
m=set()
N=int(input())
for i in range (N):
    a = int(input())
    m.add(a)
l= list(m)
l.sort()
for i in range (len(l)) :
    print(l[i])