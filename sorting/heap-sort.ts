/**
 * TODO Fix Heap Sort:
 *
 */

function exchange<T>(array: T[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function sink<T>(array: T[], i: number, n: number) {
  while (2 * i <= n) {
    let j = 2 * i;
    if (j < n && array[j] <= array[j + 1]) {
      j++;
    }
    if (array[i] >= array[j]) {
      break;
    }
    exchange(array, i, j);
    i = j;
  }
}

function heapSort<T>(array: T[]) {
  let n = array.length - 1;
  for (let i = Math.floor(n / 2); i >= 1; i--) {
    sink(array, i, n);
  }
  while (n > 1) {
    exchange(array, 1, n--);
    sink(array, 1, n);
  }
  return array;
}

console.log(heapSort([1, 2, 5, 7, 9, 0]));
