T=int(input())
for tc in range (1,T+1):
    print("#"+str(tc))
    N=int(input())
    
    num=N//50000
    N%=50000
    print(num, end=" ")
    
    num=N//10000
    N%=10000
    print(num, end=" ")
    
    num=N//5000
    N%=5000
    print(num, end=" ")
    
    num=N//1000
    N%=1000
    print(num, end=" ")
    
    num=N//500
    N%=500
    print(num, end=" ")
    
    num=N//100
    N%=100
    print(num, end=" ")
    
    num=N//50
    N%=50
    print(num, end=" ")
    
    num=N//10
    N%=10
    print(num, end=" ")
    print()