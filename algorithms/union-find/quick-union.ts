// Quick-union algorithm
// Big-O: quadratic

class UFQuickUnion {
  private id: number[];
  public count: number;
  constructor(n: number) {
    this.count = n;
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  connected(p: number, q: number) {
    return this.find(p) === this.find(q);
  }

  find(p: number) {
    // Find its root.
    while (p != this.id[p]) {
      p = this.id[p];
    }
    return p;
  }

  union(p: number, q: number) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) {
      return;
    }
    this.id[pRoot] = qRoot;
    this.count--;
  }
}
