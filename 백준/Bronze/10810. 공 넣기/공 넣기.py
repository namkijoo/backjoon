a,b=map(int,input().split())
c=[0]*a
for i in range(b):
    d,e,f=map(int,input().split())
    for i in range(d-1,e):
        c[i]=f

for i in range(a):
    print(c[i])
    