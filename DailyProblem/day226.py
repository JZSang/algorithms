"""

Good morning! Here's your coding interview problem for today.
This problem was asked by Airbnb.
You come across a dictionary of sorted words in a language you've never seen before. 

Write a program that returns the correct order of letters in this language.
For example, given ['xww', 'wxyz', 'wxyw', 'ywx', 'ywz'], you should return ['x', 'z', 'w', 'y'].

"""

from collections import defaultdict
from collections import deque


def solution(array):

    if len(array) == 1:
        return array[0]

    def build_graph(array):
        graph = defaultdict(list)
        into = defaultdict(int)
        for word in array:
            for c in word:
                graph[c]
                into[c]
        for i, word in enumerate(array):
            if i == len(array)-1:
                continue
            word2 = array[i+1]
            j = 0

            while j < min(len(word2), len(word)) and word[j] == word2[j]:
                graph[word[j]]
                into[word[j]]
                graph[word2[j]]
                into[word2[j]]
                j += 1
            if j >= min(len(word2), len(word)):
                if len(word) > len(word2):
                    return "", ""
                continue
            graph[word[j]].append(word2[j])
            word2[j]
            into[word2[j]] += 1
            into[word[j]]
        return graph, into

    graph, into = build_graph(array)
    if not graph and not into:
        return ""

    queue = deque()

    for key in into:
        if into[key] <= 0:
            queue.append(key)

    ans = []
    while queue:
        to_remove = queue.popleft()
        for to in graph[to_remove]:
            into[to] -= 1
            if into[to] <= 0:
                queue.append(to)
        ans.append(to_remove)
    for key in into:
        if into[key] > 0:
            return ""

    return "".join(ans)


print(solution(['xww', 'wxyz', 'wxyw', 'ywx', 'ywz']))
