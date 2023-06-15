import heapq
import sys

input = sys.stdin.readline
heap=[]
N=int(input())
for i in range (N):
    m=int(input())
    if m==0:
        if len(heap)==0:
            print(0)
        else :
            print((-1)*heapq.heappop(heap))
    else :
        heapq.heappush(heap, (-1)*m)