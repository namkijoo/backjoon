from collections import deque

queue = deque()
N = int(input())
while True:
    num = int(input())
    if num == -1:
        break
    if len(queue) < N:
        if num > 0:
            queue.append(num)
        elif num == 0:
            if queue:
                queue.popleft()

print(*queue)