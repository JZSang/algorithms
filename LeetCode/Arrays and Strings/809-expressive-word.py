from collections import Counter, deque


def generatePartition(word):
    counter = deque()
    i = 0
    currentChar = ""
    beforeChar = ""
    count = 0
    while i < len(word):
        beforeChar = currentChar
        currentChar = word[i]
        if currentChar != beforeChar:
            counter.append((beforeChar, count))
            count = 0
        count += 1
        i += 1
    counter.append((currentChar, count))
    counter.popleft()
    return counter


class Solution:
    def expressiveWords(self, S: str, words: List[str]) -> int:
        counter = generatePartition(S)
        i = 0
        for word in words:
            partition = generatePartition(word)
            if len(partition) != len(counter):
                continue
            failed = 0

            for j, tp in enumerate(partition):
                wordToBeExtended = partition[j]
                extendedWord = counter[j]
                if (
                    extendedWord[1] < 3
                    and wordToBeExtended[1] == extendedWord[1]
                    and extendedWord[0] == wordToBeExtended[0]
                ):
                    pass
                elif (
                    extendedWord[1] >= 3
                    and wordToBeExtended[1] <= extendedWord[1]
                    and extendedWord[0] == wordToBeExtended[0]
                ):
                    pass
                else:
                    failed = 1
                    break
            if failed:
                continue
            else:
                i += 1

        return i

