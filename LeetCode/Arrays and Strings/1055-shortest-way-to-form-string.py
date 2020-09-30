class Solution:
    def shortestWay(self, source: str, target: str) -> int:
        for c in target:
            if c not in source:
                return -1
        obj = defaultdict(lambda: [])
        for i in range(len(source)):
            obj[source[i]].append(i)

        i = 0
        count = 0
        idx = obj[target[i]][0]
        while i < len(target):
            i += 1
            if i == len(target):
                count += 1
                break
            j = bisect.bisect_right(obj[target[i]], idx)
            if j == len(obj[target[i]]):
                count += 1
                idx = obj[target[i]][0]
            else:
                idx = obj[target[i]][j]
        return count
