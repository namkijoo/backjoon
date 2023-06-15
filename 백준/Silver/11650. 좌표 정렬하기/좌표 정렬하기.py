import sys

input = sys.stdin.readline
N=int(input())
array=[]
for i in range (N):
    [a,b]=map(int,input().split())
    array.append([a,b])
array.sort()
for i in range (N):
    print(array[i][0],array[i][1])