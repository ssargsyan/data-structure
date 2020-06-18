class Stack {
  constructor() {
    this.items = [];
    this.top = 0;
  }

  push(item) {
    this.items[this.top] = item;
    this.top = this.top + 1;
  }

  isEmpty() {
    return this.top === 0;
  }

  pop() {
    if (this.isEmpty()) return null;

    this.top = this.top - 1;
    return this.items.pop();
  }

  length() {
    return this.top;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.top - 1];
  }

  print() {
    if (this.isEmpty()) console.log('Stack is empty');
    let top = this.top - 1;
    while (top >= 0) {
      console.log(this.items[top]);
      top--;
    }
  }
}

module.exports = Stack;