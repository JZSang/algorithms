"""
This problem was asked by Stripe.

Given an array of integers, 
find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
"""

def main(array):
    minimum = None
    for i in array:
        if i > 0:
            if not minimum:
                minimum = i
            else:
                minimum = i if i < minimum else minimum
    if minimum > 1:
        return 1
    
    # minimum is definitely 1
    for i in range(len(array)):
        if array[i] <= 0:
            array[i] = 1
    
    for i in range(len(array)):
        index = abs(array[i])
        if index > 0 and index <= len(array):
            if array[index-1] > 0:
                array[index-1] = -array[index-1]
    
    for i in range(len(array)):
        elem = array[i]
        if elem > 0:
            return i+1
    
    return len(array) + 1

if __name__ == "__main__":
    assert main([2,6,2,8,6,3,43,2,1]) == 4