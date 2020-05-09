// Quick find algorithm
// Big-O: quadratic

class UFQuickFind {
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
    return this.id[p];
  }

  union(p: number, q: number) {
    const pID = this.find(p);
    const qID = this.find(q);

    if (pID === qID) {
      return;
    }
    this.id = this.id.map((id) => (id === pID ? qID : id));
    this.count--;
  }
}
