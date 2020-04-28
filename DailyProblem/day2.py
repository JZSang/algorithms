"""
Good morning! Here's your coding interview problem for today.
This problem was asked by Uber.
Given an array of integers, 
return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, 
if our input was [1, 2, 3, 4, 5], 
the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division?

"""


def main(array):
    left_side = []
    j = 1
    for i in array:
        j *= i
        left_side.append(j)

    # left_side = [1,2,6,24,120]
    array_length = len(array)
    j = 1
    for i in reversed(range(array_length)):
        j *= array[i]
        array[i] = j
    # array = [120,120,60,20,5]

    for i in range(len(array)):
        left_side_value = left_side[i-1] if i > 0 else 1
        right_side_value = array[i+1] if i < len(array) - 1 else 1
        array[i] = left_side_value * right_side_value

    return array

    # answer = [120,60,40,30,24]


if __name__ == "__main__":
    test_array = [1, 2, 3, 4, 5]
    print(main(test_array))
