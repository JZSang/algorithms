"""
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
"""

class OrderLog(object):

    def __init__(self, n):
        self.records = []
        self.n = n
        self.start = 0
        self.end = n - 1

    def record(self, order_id):
        if len(self.records) == self.n:
            self.start += 1
            self.start %= self.n
            self.end += 1
            self.end %= self.n
            self.records[self.end] = order_id
        else:
            self.records.append(order_id)
        
    
    def get_last(self, i):
        return self.records[self.end - i + 1] if len(self.records) < self.n else self.records[(self.end + 1 - i) % self.n]


def main():
    log = OrderLog(3)
    log.record("a")
    log.record("b")
    log.record("c")
    log.record("d")
    log.record("e")
    log.record("f")
    print(log.records, log.start, log.end, log.get_last(3))

if __name__ == "__main__":
    main()