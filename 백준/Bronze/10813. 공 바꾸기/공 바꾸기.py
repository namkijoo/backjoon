a,b= map(int,input().split())
c=[0]*a
for i in range (a):
    c[i]=i+1
for i in range (b):
    d,f=map(int,input().split())
    tmp=c[d-1]
    c[d-1]=c[f-1]
    c[f-1]=tmp
for i in range (a):
    print(c[i])