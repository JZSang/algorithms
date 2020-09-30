string = "abcdefghijklmnopqrstuvwxyz"


def convert(word):

    for c in string:
        if c in word:
            return word.count(c)


class Solution:
    def numSmallerByFrequency(self, queries: List[str], words: List[str]) -> List[int]:
        array = [0] * 12

        for i in words:
            array[convert(i)] += 1
        for i in reversed(range(len(array))):
            if i == len(array) - 1:
                continue
            array[i] = array[i] + array[i + 1]
        for idx, i in enumerate(queries):
            queries[idx] = array[convert(i) + 1]

        return queries

