  class Stack {
  constructor() {

    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}


class MaxStack {
    constructor() {
        this.stack = new Stack();
        this.maxStack = new Stack();
    }

    push(item) {
        this.stack.push(item);
        if (this.maxStack.peek() === null || item >= this.maxStack.peek()) this.maxStack.push(item);
    }

    pop() {
        let item = this.stack.pop();
        if (item !== null && item === this.maxStack.peek()) this.maxStack.pop(); 
        return item;
    }

    peek() {
        return this.stack.peek()
    }

    getMax() {
        return this.maxStack.peek();
    }
}

let stack = new MaxStack();
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);

for (let i = 0; i < 5; i++) {
    console.log("max " + stack.getMax())
    console.log("popped " + stack.pop())   
}