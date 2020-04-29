"""
This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
"""

def main(s, k):
    distincts = { s[0] : 0 }
    longest = s[0]
    left = 0
    right = 1
    while right < len(s):
        if s[right] in distincts:
            distincts[s[right]] = right
        else:
            if len(distincts) >= k:
                # otherwise, pop last occurring char
                key_to_pop = min(distincts, key=distincts.get)
                left = distincts.pop(key_to_pop) + 1
            distincts[s[right]] = right
        right += 1
        longest = s[left:right] if len(s[left:right]) > len(longest) else longest
    print(distincts)
    return longest

s = "babcdba"
k = 3

print(main(s, k))