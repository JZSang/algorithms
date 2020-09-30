from collections import Counter


class Solution:
    def isNStraightHand(self, hand: List[int], W: int) -> bool:
        if len(hand) % W != 0:
            return False
        counter = Counter(hand)
        for i in sorted(hand):
            if counter[i] == 0:
                continue
            for j in range(0, W):
                if i + j not in counter or counter[i + j] <= 0:
                    return False
                counter[i + j] -= 1
        return True

