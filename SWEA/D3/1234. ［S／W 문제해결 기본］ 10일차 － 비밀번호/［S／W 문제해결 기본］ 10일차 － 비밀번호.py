for tc in range(1, 11):
    n, word = map(str, input().split())

    while True:
        length = len(word)
        sum_val = 0

        for i in range(length - 1):
            if i == len(word) - 2 and word[i] == word[i + 1]:
                word = word[:i] + word[i + 2:]
                sum_val += 1
            elif i < len(word) - 1 and word[i] == word[i + 1]:
                word = word[:i] + word[i + 2:]
                sum_val += 1

        if sum_val == 0:
            break
    print("#{} {}".format(tc,word))
