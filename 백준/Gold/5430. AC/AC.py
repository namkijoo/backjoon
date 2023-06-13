import sys
from collections import deque

t = int(sys.stdin.readline())

for i in range(t):
    p = sys.stdin.readline().rstrip()
    n = int(sys.stdin.readline())
    arr = deque(sys.stdin.readline().rstrip()[1:-1].split(","))

    if n == 0:
        arr = deque()

    flag = 0
    tmp = 0
    for j in p:
        if j == 'R':
            tmp += 1
        elif j == 'D':
            if len(arr) == 0:
                print("error")
                flag = 1
                break
            else:
                if tmp % 2 == 0:
                    arr.popleft()
                else:
                    arr.pop()

    if flag == 0:
        if tmp % 2 == 0:
            print('[' + ",".join(list(arr)) + ']')
        else:
            arr.reverse()
            print('[' + ",".join(list(arr)) + ']')
