T=int(input())
for i in range (1, T+1):
    word = input()
    length=len(word)
    L=length//2
    
    if length%2==0:
        a=word[:L]
        b=word[L:]
        c=b[::-1]
        if a==c:
            print("#{} {}".format(i, 1))
        else :
            print("#{} {}".format(i, 0))
    
    else :
        a=word[:L]
        b=word[L+1:]
        c=b[::-1]
        if a==c:
            print("#{} {}".format(i, 1))
        else :
            print("#{} {}".format(i, 0))
              