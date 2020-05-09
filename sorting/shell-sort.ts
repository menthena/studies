/**
 * Shell Sort:
 * h-sort, based on insertion sort but exchange items far apart
 * from each other, rather than adjacent items
 * Big-O: n^3/2
 *
 */

function shellSort<T>(array: T[]) {
  const n = array.length;
  let h = 1;
  while (n < n / 3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && array[j] < array[j - h]; j -= h) {
        const temp = array[j];
        array[j] = array[j - h];
        array[j - h] = temp;
      }
    }
    h = h / 3;
  }
  return array;
}

console.log(shellSort([1, 2, 5, 7, 9, 0]));
