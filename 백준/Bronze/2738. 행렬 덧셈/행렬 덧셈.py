a,b=map(int,input().split())
A,B,C=[],[],[]
for i in range (a):
    c = list(map(int,input().split()))
    A.append(c)
for i in range (a):
    d = list(map(int,input().split()))
    B.append(d)

for i in range (a):
    for j in range (b):
        C = A[i][j]+B[i][j]
        print(C)
