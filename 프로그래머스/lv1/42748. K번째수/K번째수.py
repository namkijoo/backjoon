def solution(array, commands):
    result=[]
    for i in range (len(commands)):
        a=commands[i][0]
        b=commands[i][1]
        c=commands[i][2]
        first = array[a-1:b]
        second=sorted(first)
        result.append(second[c-1])
    return(result)