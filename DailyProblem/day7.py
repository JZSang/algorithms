"""

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
"""

def solution(string):
    if s.startswith("0"):
        return 0
        # employ dyanmic programming
    # assuming a really long string such as
    # 248 ...  111 ... 92749
    # If we stopped at 111, then we should keep count of all the ways we could decode the message before hand
    # and then just tack on the variations of 111
    counter = [1]
    for i in range(len(string)):
        if i <= 0:
            continue
        counter.append(counter[i-1] if string[i] != "0" else 0)
        can_use_prev = not string[i-1:i+1].startswith("0") and 26 >= int(string[i-1:i+1]) >= 1
        if can_use_prev:
            if i == 1:
                counter[i] += 1
            else:
                counter[i] += counter[i-2]


    return counter[-1]


if __name__ == "__main__":
    test_string = "1351111"
    assert solution(test_string) == 10