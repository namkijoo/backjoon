import sys
input = sys.stdin.readline
a = int(input())
for i in range (a):
    count=0
    ps = list(input())
    for i in ps:
        if(i=="("):
            count+=1
        elif(i==")"):
            count-=1
        if(count<0):
            print("NO")
            break
    if(count==0):
        print("YES")
    elif(count>0):
        print("NO")
        
        
