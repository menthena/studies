// Doubly Linked list nodes have prev and next pointers.
// Can be traversed in reverse order.
// 1 <-> 2 <-> 3

class Node<T> {
  public value: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  public head: Node<T> | null = null;
  public tail: Node<T> | null = null;
  public size: number = 0;

  addLast(value: T) {
    const node = new Node(value);
    if (this.tail === null || this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.size++;
  }

  remove(value: T) {
    for (
      let currentNode = this.head;
      currentNode !== null;
      currentNode = currentNode.next
    ) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.head = currentNode.next;
          if (this.head) {
            this.head.prev = null;
          }
          if (currentNode === this.tail) {
            this.tail = null;
          }
        }
      }
    }
  }

  iterate() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const list = new DoublyLinkedList<Number>();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.iterate();
