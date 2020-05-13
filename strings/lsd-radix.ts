function lsdSort(a: string[], w: number) {
  const N = a.length;
  const R = 256; // extend ASCII alphabet size
  const aux = Array.from(Array(N));
  for (let d = w - 1; d >= 0; d--) {
    const charCodeCount = Array.from(Array(R + 1)).fill(0);
    a.forEach((item) => {
      const nextCharCode = item.charCodeAt(d) + 1;
      // Put the found charCode into the bucket and increase
      charCodeCount[nextCharCode]++;
    });

    for (let r = 0; r < R; r++) {
      // Accumulate the count to the next charCode
      charCodeCount[r + 1] += charCodeCount[r];
    }

    a.forEach((item) => {
      const charCode = item.charCodeAt(d);
      const order = charCodeCount[charCode]++;
      aux[order] = item;
    });

    // No need to copy back, return the auxiliary array.
    if (w === 1) {
      return aux;
    }

    // copy back
    a = a.map((_, i) => aux[i]);
  }
  return a;
}

// console.log(lsdSort("bac".split(""), 1));
// console.log(lsdSort("ahmet atasoy".split(""), 1));
console.log(lsdSort("ok do be ze aa ba".split(" "), 2));
