class LRUCache:

    def __init__(self, capacity: int):
        self.dict = {}
        self.capacity = capacity
        self.head = Node(-1)
        self.tail = Node(-1)
        self.head.next = self.tail
        self.tail.prev = self.head

        self.size = 0

    def get(self, key: int) -> int:
        ret = self.dict.get(key)
        if not ret:
            return -1

        ret.prev.next = ret.next
        ret.next.prev = ret.prev

        self.add_head(ret)

        return ret.value[1]

    def put(self, key: int, value: int) -> None:
        if key in self.dict:
            self.dict[key].value[1] = value
            ret = self.dict[key]
            ret.prev.next = ret.next
            ret.next.prev = ret.prev
            self.add_head(ret)
            return
        if self.size >= self.capacity:
            self.remove_lru()
        new_node = Node([key, value])

        self.add_head(new_node)
        self.dict[key] = new_node
        self.size += 1

    def remove_lru(self):
        # we have positive capacity, so lru only called when something is in it
        value = self.tail.prev.value

        self.tail.prev.prev.next = self.tail
        self.tail.prev = self.tail.prev.prev

        del self.dict[value[0]]
        self.size -= 1

    def add_head(self, node):

        node.next = self.head.next
        node.prev = self.head

        self.head.next.prev = node
        self.head.next = node


class Node(object):
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
