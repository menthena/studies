class Queue<T> {
  list: Array<T> = [];
  constructor(item: T) {
    this.list.push(item);
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
  isEmpty() {
    return this.list.length === 0;
  }
  front() {
    if (this.isEmpty()) {
      throw new Error("no elements");
    }
    return this.list[0];
  }
  printQueue() {
    this.list.forEach((item) => console.log(item));
  }
}

const queue = new Queue<Number>(0);
queue.enqueue(1);
queue.dequeue();
queue.printQueue();
