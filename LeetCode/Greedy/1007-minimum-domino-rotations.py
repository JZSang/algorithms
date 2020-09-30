from collections import Counter


def checkElem(main, rotationorigin, elem):
    count = 0
    for i in range(len(main)):
        if main[i] == elem:
            continue
        elif main[i] != elem and rotationorigin[i] == elem:
            count += 1
        else:
            return 2 * len(rotationorigin)
    return count


class Solution:
    def minDominoRotations(self, A: List[int], B: List[int]) -> int:
        first = A[0]
        second = B[0]
        array = []

        array.append(checkElem(A, B, first))
        array.append(checkElem(A, B, second))
        array.append(checkElem(B, A, first))
        array.append(checkElem(B, A, second))
        if min(array) == 2 * len(A):
            return -1
        else:
            return min(array)

