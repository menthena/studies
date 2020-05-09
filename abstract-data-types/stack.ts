import { DoublyLinkedList } from "./doubly-linked-list";

class Stack<T> {
  list: DoublyLinkedList<T>;
  constructor(item: T) {
    this.push(item);
  }
  push(item: T) {
    this.list.addLast(item);
  }
  pop() {
    let tail = this.list.tail;
    if (tail) {
      this.list.tail = tail.prev;
      if (this.list.tail) {
        this.list.tail.next = null;
      }
    }
    this.list.size--;
    return tail;
  }
  isEmpty() {
    return this.list.size === 0;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("no elements");
    }
    return this.list.tail;
  }
  iterate() {
    this.list.iterate();
  }
}

const stack = new Stack<Number>(0);
stack.push(1);
stack.pop();
stack.iterate();
