


"""
Good morning! Here's your coding interview problem for today.
This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass?

"""


def main(array, k):
    set_add = set([])
    for i in array:
        if k - i in set_add:
            return True
        set_add.add(i)
    return False

def main_alternative(array, k):
    array.sort()

    i = 0
    j = len(array) - 1

    while i < j:
        sum = array[i] + array[j]
        if sum > k:
            j -= 1
        elif sum < k:
            i += 1
        else:
            return True
    
    return False


if __name__ == "__main__":
    test_array = [11,14,3,7]
    k = 25
    print(main(test_array, k))
    print( main_alternative(test_array, k) )