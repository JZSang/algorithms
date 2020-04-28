"""
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
"""



def main(array):
    if len(array) == 1:
        return array[0]
    maximum = array[0]
    if len(array) == 2:
        return max(array)


    for i in range(len(array)):
        if i == 0:
            continue
        if i == 1:
            array[i] = max(array[i-1], array[i])
            continue
        array[i] = max(array[i-2] + array[i], array[i-1], array[i], maximum)
    print(array)
    return (array[-1])


if __name__ == "__main__":
    assert main([-7, -2, -3, -1]) == -1