entries = []
f = open("Day_1/Day_1.txt", "r")
for line in f:
    entries.append(int(line))
f.close()


def getProductOfTwo(entrylist):
    for first in entrylist:
        for second in entrylist[entrylist.index(first):]:
            if (second + first == 2020):
                return first * second
    return None


print(getProductOfTwo(entries))
