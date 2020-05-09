import { SinglyLinkedList, Node } from "./singly-linked-list";

class Queue<T> {
  list: SinglyLinkedList<T>;
  constructor(item: T) {
    this.enqueue(item);
  }
  enqueue(item: T) {
    let tail = this.list.head;
    while (tail && tail.next) {
      tail = tail.next;
    }
    if (tail) {
      tail.next = new Node(item);
    }
  }
  dequeue() {
    if (this.list.head) {
      const head = this.list.head;
      if (this.list.head.next) {
        this.list.head = this.list.head.next;
      } else {
        this.list.head = null;
      }
      return head;
    }
    return null;
  }
  isEmpty() {
    return this.list.size === 0;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("no elements");
    }
    return this.list[0];
  }
  iterate() {
    this.list.iterate();
  }
}

const queue = new Queue<Number>(0);
queue.enqueue(1);
queue.dequeue();
queue.iterate();
