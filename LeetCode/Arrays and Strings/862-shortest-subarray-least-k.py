
"""
Use a deque.

Stack up indices in the array.
Make a cumulative sum in A (from the left)
Deque is in increasing order of indices.

Consider when the cumulative sum goes down (due to a negative):
Then anything before that sum that is larger than it is quite useless
Now only that, the sum right before it goes down can lead us to exit
the while loop early


"""


class Solution:
    def shortestSubarray(self, A: List[int], K: int) -> int:
        ret = len(A) + 1
        d = deque()
        for i, nm in enumerate(A):
            if i > 0:
                A[i] += A[i-1]
            if A[i] >= K:
                ret = min(ret, i + 1)
            while d and A[i] <= A[d[-1]]:
                d.pop()
            while d and A[i] - A[d[0]] >= K:
                ret = min(ret, i - d[0])
                d.popleft()
            d.append(i)
        return ret if ret <= len(A) else -1
