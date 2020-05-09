export class Node<T> {
  public value: T;
  public next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public head: Node<T> | null = null;
  public size: number = 0;

  push(value: T) {
    const node = new Node(value);
    if (this.head !== null) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  delete(value: T) {
    if (this.head === null) {
      return;
    }
    let currentNode = this.head.next;
    while (currentNode && currentNode.next) {
      const next = currentNode.next;
      if (currentNode.value === value && next.next !== null) {
        currentNode.next = next.next;
      }
      currentNode = currentNode.next;
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

const list = new SinglyLinkedList<Number>();
list.push(1);
list.push(2);
list.push(3);
list.iterate();
