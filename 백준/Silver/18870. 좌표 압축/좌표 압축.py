import sys
input = sys.stdin.readline

N=int(input())
a=list(map(int,input().rstrip().split()))
L=set(a)
arrays=list(L)
arrays.sort()
numdict={}
for i in range (len(arrays)):
    numdict[arrays[i]]=i
for i in a:
    print(numdict[i], end=' ')
    

