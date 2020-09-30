class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        i = 0
        j = 0
        stack = []
        while i < len(pushed) and j < len(popped):
            if stack and stack[-1] == popped[j]:
                stack.pop()
                j += 1
            else:
                stack.append(pushed[i])
                i += 1
        while j < len(popped):
            if stack and stack[-1] == popped[j]:
                j += 1
                stack.pop()
            else:
                return False
        return len(stack) == 0
