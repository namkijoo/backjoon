import sys
input= sys.stdin.readline
array=[]
N=int(input())
for i in range (N):
    a,b=input().rstrip().split()
    array.append((int(a),b))
array.sort(key=lambda x:x[0])
for i in range (N) :
    print(array[i][0],array[i][1])
