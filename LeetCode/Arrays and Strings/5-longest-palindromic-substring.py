class Solution:
    def longestPalindrome(self, s: str) -> str:
        low = 0
        high = len(s) - 1
        maxi = 0
        for i, char in enumerate(s):
            j = 0
            lower = i - j
            higher = i + j
            while lower - 1 >= 0 and higher + 1 < len(s) and s[lower - 1] == s[higher + 1]:
                j += 1
                lower = i - j
                higher = i + j
            if higher - lower > maxi:
                high = higher
                low = lower
                maxi = higher - lower

            j = 0
            lower = i - j
            higher = i + j + 1
            if lower >= 0 and higher < len(s) and s[lower] != s[higher]:
                continue
            while lower - 1 >= 0 and higher + 1 < len(s) and s[lower - 1] == s[higher + 1]:
                j += 1
                lower = i - j
                higher = i + j + 1
            if higher - lower > maxi:
                high = higher
                low = lower
                maxi = higher - lower
        return s[low:high+1]
