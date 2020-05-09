// Weighted quick-union algorithm
// Big-O: logarithmic

class UFWeightedQuickUnion {
  private id: number[];
  private weight: number[];
  public count: number;
  constructor(n: number) {
    this.count = n;
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
      this.weight[i] = 1;
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
    if (this.weight[pRoot] < this.weight[qRoot]) {
      this.id[pRoot] = qRoot;
      this.weight[qRoot] += this.weight[pRoot];
    } else {
      this.id[qRoot] = pRoot;
      this.weight[pRoot] += this.weight[qRoot];
    }
    this.count--;
  }
}
