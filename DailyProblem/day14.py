"""
This problem was asked by Google.

The area of a circle is defined as 2. Estimate  to 3 decimal places using a Monte Carlo method
Hint: The basic equation of a circle is x2 + y2 = r2.
"""

from random import uniform

def generate():
    return [uniform(-1, 1), uniform(-1,1)]


def is_in_circle(dot):
    return (dot[0] * dot[0] + dot[1] * dot[1]) < 1

def main():
    iterations = 10000000
    in_circle = 0

    for _ in range(iterations):
        if is_in_circle(generate()):
            in_circle += 1

    return in_circle * 4 / iterations


def main2():
    add = 0
    for _ in range(10):
        add += main()
    return add / 10

print(main2())