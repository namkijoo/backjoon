def solution(s):
    list = []
    strr=""
    list = sorted(s,reverse=True)
    for i in list:
        strr+=i
    return strr