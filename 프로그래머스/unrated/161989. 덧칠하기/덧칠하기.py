from collections import deque
def solution(n, m, section):
    section = deque(section)
    answer=0
    while section:
        start = section.popleft()
        while section and start+m>section[0]:
            section.popleft()
        answer+=1
    
    return answer