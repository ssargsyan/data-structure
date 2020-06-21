class Queue {
  constructor() {
    this.items = [];
    this.rear = 0;
    this.size = 20;
  }

  enqueue(item) {
    if (this.rear >= this.size) return null;
    this.items[this.rear] = item;
    this.rear = this.rear + 1;
  }

  isEmpty() {
    return this.rear === 0;
  }

  length() {
    return this.rear;
  }

  front() {
    return this.isEmpty() ? null : this.items[0];
  }

  last() {
    return this.isEmpty() ? null : this.items[this.rear - 1];
  }

  dequeue() {
    if (this.isEmpty()) return null;
    this.rear = this.rear - 1;
    return this.items.shift();
  }

  print() {
    for (i = 0; i < this.rear; i++) {
      console.log(this.items[i]);
    }
  }

  reset() {
    this.items.length = 0;
    this.rear = 0;
  }
}

module.exports = Queue;
