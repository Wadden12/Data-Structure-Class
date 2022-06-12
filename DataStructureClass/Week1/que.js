class Queue {
  constructor() {
    this.items = [];
    this.lowestCount = 0;
    this.count = 0;
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  peek() {
    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.count = 0;
    this.items = [];
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queue();
queue.enqueue("Noah");
queue.enqueue("Scoot");
queue.enqueue("Jacob");
queue.enqueue("Brady");
queue.enqueue("Jennifer");

console.log(queue.size());
console.log(queue.toString());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.toString());

// Given a Queue consisting of first n natural numbers (in random order).

// The task is to check whether the given Queue elements can be arranged in increasing order in another Queue using a stack

// Input : Queue = { 5,1, 2, 3, 4 }

// q = {1,2,3,4,}

// stack = [5]

// Output : Yes
