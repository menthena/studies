class Node {
  public val: string;
  public next: Node[];
}

export class Trie {
  private root: Node = new Node();

  public get(key: string) {
    const node = this.getRecursive(this.root, key, 0);
    if (!node) {
      return;
    }
    return node.val;
  }

  private getRecursive(node: Node, key: string, index: number) {
    if (!node) {
      return;
    }
    if (index === key.length) {
      return node;
    }
    const char = key.charAt(index);
    return this.getRecursive(node.next[char], key, index + 1);
  }

  public put(key: string, val: string) {
    this.root = this.putRecursive(this.root, key, val, 0);
  }

  private putRecursive(node: Node, key: string, val: string, index: number) {
    if (!node) {
      node = new Node();
    }
    if (index === key.length) {
      node.val = val;
      return node;
    }
    const char = key.charAt(index);
    node.next[char] = this.putRecursive(node.next[char], key, val, index + 1);
    return node;
  }
}
