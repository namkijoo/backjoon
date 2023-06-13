from collections import deque
import sys
deq = deque()
N = int(sys.stdin.readline())
for i in range (N) :
    a = sys.stdin.readline().rstrip().split()
    if(a[0]=='push_front') :
        deq.appendleft(a[1])
    elif(a[0]=='push_back') :
        deq.append(a[1])
    elif(a[0]=='pop_front') :
        if(len(deq)==0) :
            print(-1)
        else :
            print(deq.popleft())
    elif(a[0]=='pop_back') :
        if(len(deq)==0) :
            print(-1)
        else :
            print(deq.pop())
    elif(a[0]=='size') :
        print(len(deq))
    elif(a[0]=='empty') :
        if(len(deq)==0):
            print(1)
        else :
            print(0)
    elif(a[0]=='front') :
        if(len(deq)==0) :
            print(-1)
        else :
            print(deq[0])
    elif(a[0]=='back') :
        if(len(deq)==0) :
            print(-1)
        else:
            print(deq[-1])