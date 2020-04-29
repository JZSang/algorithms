"""
This problem was asked by Twitter.

Implement an autocomplete system.
That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
"""


# implement a trie

class TrieNode(object):

    def __init__(self, val):
        self.val = val
        self.children = []
        self.ends_here = False

    def add_word(self, letters_left):
        if not letters_left:
            self.ends_here = True
            return
        for child in self.children:
            if child.val == letters_left[0]:
                child.add_word(letters_left[1:])
                return
        new_node = TrieNode(letters_left[0])
        self.children.append(new_node)
        new_node.add_word(letters_left[1:])

    def possible_strings(self):
        if not self.children:
            return [self.val]
        all_suffixes = []
        for child in self.children:
            all_suffixes.extend(child.possible_strings())

        return [(self.val + suffix)
                for suffix in all_suffixes] + ([self.val] if self.ends_here else [])

    def reach_end_node(self, letters_left):
        if not letters_left:
            return self
        for child in self.children:
            if child.val == letters_left[0]:
                return child.reach_end_node(letters_left[1:])


def main(query, strings):
    root = TrieNode("")
    for string in strings:
        root.add_word(string)

    new_end = root.reach_end_node(query)
    print([query + result[1:] for result in new_end.possible_strings()])

main("d", ["dog", "deer", "deal", "do"])